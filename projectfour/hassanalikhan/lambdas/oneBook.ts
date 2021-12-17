import * as AWS from "aws-sdk";

const TABLE_NAME_ALL = process.env.TABLE_NAME_ALL || "";
const PRIMARY_KEY_ALL = process.env.PRIMARY_KEY_ALL || "";

const db = new AWS.DynamoDB.DocumentClient();

export const handler = async (event: any = {}): Promise<any> => {
  const requestedItemId = event.pathParameters.id;

  const params = {
    TableName: TABLE_NAME_ALL,
    Key: {
      [PRIMARY_KEY_ALL]: requestedItemId,
    },
  };

  try {
    const response = await db.get(params).promise();

    // No books with requested ID
    if (!response.Item) {
      return {
        statusCode: 201,
        body: `{ "Message": "No book with requested ID - Try Again" }`,
      };
    }
    // Book present in ddb with requested ID
    return { statusCode: 200, body: JSON.stringify(response.Item) };
  } catch (err) {
    return { statusCode: 500, body: err };
  }
};
