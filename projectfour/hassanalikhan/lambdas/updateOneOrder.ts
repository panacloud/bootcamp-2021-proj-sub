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
      body: `{ "Error": "Provide Authentication token" }`,
    };
  }
  if (!event.body || Object.keys(JSON.parse(event.body)).length >= 2) {
    return {
      statusCode: 400,
      body: `Invalid Request, You are missing the parameter body or giving too many parameters. Give parameters in the following format.\n{
        "noOfBooks": "No of Books to order"
        }`,
    };
  }
  const item =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);
  if (
    !item.noOfBooks ||
    isNaN(item.noOfBooks) ||
    !Number.isInteger(item.noOfBooks) ||
    item.noOfBooks < 1
  ) {
    return {
      statusCode: 400,
      body: `Invalid Request, Give No. of books to order in the following format.\n{
          "noOfBooks": "No of Books to order"
        }`,
    };
  }
  if (!event.pathParameters || !event.pathParameters.id) {
    return {
      statusCode: 400,
      body: `{ "Error": "You are missing the path parameter id" }`,
    };
  }
  const params1 = {
    TableName: TABLE_NAME_USER,
  };
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
  const editedItemProperties = Object.keys(item);
  const firstProperty = editedItemProperties.splice(0, 1);
  const params2: any = {
    TableName: TABLE_NAME_ORDER,
    Key: {
      [PRIMARY_KEY_ORDER]: requestedItemId,
    },
    UpdateExpression: `set ${firstProperty} = :${firstProperty}`,
    ExpressionAttributeValues: {},
    ReturnValues: "UPDATED_NEW",
  };
  params2.ExpressionAttributeValues[`:${firstProperty}`] =
    item[`${firstProperty}`];
  editedItemProperties.forEach((property) => {
    params2.UpdateExpression += `, ${property} = :${property}`;
    params2.ExpressionAttributeValues[`:${property}`] = item[property];
  });
  const response2 = await db.get(params2).promise();
  if (!response2.Item) {
    return {
      statusCode: 400,
      body: `{ "Error": "No Order with requested ID - Try Again" }`,
    };
  }
  try {
    if (
      response2.Item &&
      response2.Item.user_ID === event.headers.Authorization.split(" ")[1]
    ) {
      await db.update(params2).promise();
      return {
        statusCode: 200,
        body: `{ "Message": "Order Updated" }`,
      };
    } else {
      return {
        statusCode: 200,
        body: `{ "Error": "No Order with requested ID - Try Again" }`,
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error };
  }
};
