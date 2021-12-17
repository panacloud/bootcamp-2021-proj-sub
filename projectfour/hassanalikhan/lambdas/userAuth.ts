import * as AWS from "aws-sdk";
import { randomBytes } from "crypto";

const PRIMARY_KEY_USER = process.env.PRIMARY_KEY_USER || "";
const TABLE_NAME_USER = process.env.TABLE_NAME_USER || "";

const db = new AWS.DynamoDB.DocumentClient();

export const handler = async (event: any = {}): Promise<any> => {
  // If no body given or extra values given
  if (!event.body || Object.keys(JSON.parse(event.body)).length >= 3) {
    return {
      statusCode: 400,
      body: `Invalid Request, Body parameters missing or too many parameters given. Give parameters in the following format.\n{
          "userName": "User's Name",
          "userEmail": "User's Email"
        }`,
    };
  }

  // Get data from request body
  const item =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);
  item["user_ID"] = randomBytes(32).toString("hex");

  // Check if all parameters are given
  if (!item.userEmail || !item.userName) {
    return {
      statusCode: 400,
      body: `Invalid Request, You are missing some parameters in body. Give missing parameters.\n{
          "userName": ${item.userName || "Missing"}, 
          "userEmail": ${item.userEmail || "Missing"}
        }`,
    };
  }

  // Check if email in correct format
  if (
    !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(item.userEmail)
      ? true
      : false)
  ) {
    return {
      statusCode: 400,
      body: `{"Invalid Request": "Enter Email in valid format"}`,
    };
  }

  // Params to add user
  const params1 = {
    TableName: TABLE_NAME_USER,
    Item: item,
  };
  // params to check registered user
  const params2 = {
    TableName: TABLE_NAME_USER,
    Key: {
      [PRIMARY_KEY_USER]: item.userEmail,
    },
  };

  try {
    const response = await db.get(params2).promise();
    // Check if user is already registered
    if (response.Item) {
      return {
        statusCode: 201,
        body: `User already registered. Copy user_ID to be used for Auth.\n${JSON.stringify(
          response.Item
        )}`,
      };
    }
    // Register new user
    await db.put(params1).promise();
    return {
      statusCode: 200,
      body: `Following user success-fully registered. Copy user_ID to be used for Auth. \n{
        "userName": ${item.userName}, 
        "userEmail": ${item.userEmail},
        "user_ID":${item.user_ID}
      }`,
    };
  } catch (err) {
    return { statusCode: 500, body: err };
  }
};
