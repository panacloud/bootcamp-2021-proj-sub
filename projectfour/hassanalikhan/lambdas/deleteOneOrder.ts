import * as AWS from "aws-sdk";
const db = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME_USER = process.env.TABLE_NAME_USER || "";
const TABLE_NAME_ORDER = process.env.TABLE_NAME_ORDER || "";
const PRIMARY_KEY_ORDER = process.env.PRIMARY_KEY_ORDER || "";

export const handler = async (event: any = {}): Promise<any> => {
  if (
    !event.headers.Authorization ||
    !event.headers.Authorization.split(" ")[1]
  ) {
    return {
      statusCode: 400,
      body: `{ "Invalid Request": "Provide Authentication token" }`,
    };
  }
  if (!event.pathParameters || !event.pathParameters.id) {
    return {
      statusCode: 400,
      body: `{ "Invalid Request": "You are missing the path parameter id" }`,
    };
  }
  const params1 = {
    TableName: TABLE_NAME_USER,
  };

  try {
    const response1 = await db.scan(params1).promise();
    if (response1.Count === 0) {
      return {
        statusCode: 201,
        body: `{ "message": "You are not a registered user. Register Yourself or provide correct user Key" }`,
      };
    }
    if (
      response1.Items &&
      response1.Items.filter(
        (userItem) =>
          userItem.user_ID === event.headers.Authorization.split(" ")[1]
      ).length === 0
    ) {
      return {
        statusCode: 201,
        body: `{ "message": "You are not a registered user. Register Yourself or provide correct user Key" }`,
      };
    }
    const requestedItemId = event.pathParameters.id;
    const params2 = {
      TableName: TABLE_NAME_ORDER,
      Key: {
        [PRIMARY_KEY_ORDER]: requestedItemId,
      },
    };
    const response2 = await db.get(params2).promise();
    if (!response2.Item) {
      return {
        statusCode: 201,
        body: `{ "message": "No Order with requested ID - Try Again" }`,
      };
    }
    if (
      response2.Item &&
      response2.Item.user_ID === event.headers.Authorization.split(" ")[1]
    ) {
      await db.delete(params2).promise();
      return {
        statusCode: 200,
        body: `{ "Message": "Requested Order deleted" }`,
      };
    } else {
      return {
        statusCode: 201,
        body: `{ "message": "No Order with requested ID - Try Again" }`,
      };
    }
  } catch (err) {
    return { statusCode: 500, body: err };
  }
};
