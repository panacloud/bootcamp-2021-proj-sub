import * as AWS from "aws-sdk";
const db = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME_USER = process.env.TABLE_NAME_USER || "";
const TABLE_NAME_ORDER = process.env.TABLE_NAME_ORDER || "";

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
    const params2 = {
      TableName: TABLE_NAME_ORDER,
      ProjectionExpression: "user_ID, orderID, book, noOfBooks",
    };
    const response2 = await db.scan(params2).promise();
    if (response2.Count === 0) {
      return {
        statusCode: 201,
        body: `{ "message": "Currently No orders in place" }`,
      };
    }
    if (
      response2.Items &&
      response2.Items.filter(
        (orderItem) =>
          orderItem.user_ID === event.headers.Authorization.split(" ")[1]
      ).length === 0
    ) {
      return {
        statusCode: 201,
        body: `{ "message": "Currently No orders in place" }`,
      };
    }
    if (response2.Items) {
      return {
        statusCode: 200,
        body: JSON.stringify(
          response2.Items.filter(
            (orderItem) =>
              orderItem.user_ID === event.headers.Authorization.split(" ")[1]
          )
        ),
      };
    } else {
      return {
        statusCode: 201,
        body: `{ "message": "Currently No orders in place" }`,
      };
    }
  } catch (error) {
    return { statusCode: 500, body: error };
  }
}
