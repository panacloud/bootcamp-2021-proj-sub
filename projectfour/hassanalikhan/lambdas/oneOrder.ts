import * as AWS from "aws-sdk";
const db = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME_USER = process.env.TABLE_NAME_USER || "";
const TABLE_NAME_ORDER = process.env.TABLE_NAME_ORDER || "";
const PRIMARY_KEY_ORDER = process.env.PRIMARY_KEY_ORDER || "";
export async function handler(event: any) {
  if (
    !event.headers.Authorization ||
    !event.headers.Authorization.split(" ")[1]
  ) {
    return {
      statusCode: 400,
      body: `{ "Invalid Request": "Provide Authentication token" }`,
    };
  }
  const params1 = {
    TableName: TABLE_NAME_USER,
  };
  try {
    const response = await db.scan(params1).promise();
    if (response.Count === 0) {
      return {
        statusCode: 201,
        body: `{ "message": "You are not a registered user. Register Yourself or provide correct user Key" }`,
      };
    }
    if (
      response.Items &&
      response.Items.filter(
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
      return { statusCode: 200, body: JSON.stringify(response2.Item) };
    } else {
      return {
        statusCode: 201,
        body: `{ "message": "No Order with requested ID - Try Again" }`,
      };
    }
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error };
  }
}
