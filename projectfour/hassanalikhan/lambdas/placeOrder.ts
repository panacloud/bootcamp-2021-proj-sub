import * as AWS from "aws-sdk";
import { randomBytes } from "crypto";
const db = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME_USER = process.env.TABLE_NAME_USER || "";
const TABLE_NAME_ALL = process.env.TABLE_NAME_ALL || "";
const PRIMARY_KEY_ALL = process.env.PRIMARY_KEY_ALL || "";
const PRIMARY_KEY_ORDER = process.env.PRIMARY_KEY_ORDER || "";
const TABLE_NAME_ORDER = process.env.TABLE_NAME_ORDER || "";

export async function handler(event: any) {
  // Check if Auth Token is provided
  if (
    !event.headers.Authorization ||
    !event.headers.Authorization.split(" ")[1]
  ) {
    return {
      statusCode: 400,
      body: `{ "Invalid Request": "Provide Authentication token" }`,
    };
  }
  // Check for request body
  if (!event.body || Object.keys(JSON.parse(event.body)).length >= 3) {
    return {
      statusCode: 400,
      body: `Invalid Request, Body parameters are missing or too many parameters are given. Give parameters in the following format.\n{
          "bookID": "ID of Book to order", 
          "noOfBooks": "No. of Books to Order"
        }`,
    };
  }
  const item =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);
  // Check for item format
  if (!item.bookID || !item.noOfBooks || isNaN(item.noOfBooks)) {
    return {
      statusCode: 400,
      body: `Invalid Request, You are missing some parameters in body. Give missing parameters.\n{
              "bookID": ${item.bookID || "Missing"}, 
              "noOfBooks": ${
                isNaN(item.noOfBooks)
                  ? "Not a Number or Missing"
                  : item.noOfBooks
              }
            }`,
    };
  }
  item["user_ID"] = event.headers.Authorization.split(" ")[1];

  const params1 = {
    TableName: TABLE_NAME_USER,
  };
  try {
    const response = await db.scan(params1).promise();
    // check if there are users registered in database
    if (response.Count === 0) {
      return {
        statusCode: 201,
        body: `{"message": "You are not a registered user. Register Yourself or provide correct user Key"}`,
      };
    } else {
      // if users in list but not registered user
      if (response.Items) {
        if (
          response.Items.filter(
            (userItem) => userItem.user_ID === item["user_ID"]
          ).length === 0
        ) {
          return {
            statusCode: 201,
            body: `{ "message": "You are not a registered user. Register Yourself or provide correct user Key" }`,
          };
        } else {
          //get user data
          const userResponse = response.Items.filter(
            (userItem) => userItem.user_ID === item["user_ID"]
          );
          item["userName"] = userResponse[0].userName;
          item["userEmail"] = userResponse[0].userEmail;
          const params2 = {
            TableName: TABLE_NAME_ALL,
            Key: {
              [PRIMARY_KEY_ALL]: item.bookID,
            },
          };
          const response2 = await db.get(params2).promise();
          // check for Book in database
          if (!response2.Item) {
            return {
              statusCode: 201,
              body: `{ "message": "No book with requested ID - Try Again" }`,
            };
          }
          item["book_type"] = response2.Item.book_type;
          item["book"] = response2.Item.book;
          item["isbn"] = response2.Item.isbn;
          item["price"] = response2.Item.price;
          item["author"] = response2.Item.author;
          item[PRIMARY_KEY_ORDER] = randomBytes(32).toString("hex");
          const params3 = {
            TableName: TABLE_NAME_ORDER,
            Item: item,
          };
          await db.put(params3).promise();
          // place order
          return {
            statusCode: 200,
            body: `Order with following details success-fully placed.\n{
                "orderID": ${item.orderID},
                "userName":${item.userName},
                "userEmail":${item.userEmail},
                "book": ${item.book},
                "author": ${item.author},
                "book_type": ${item.book_type},
                "price": ${item.price}, 
                "noOfBooks": ${item.noOfBooks},
                "user_ID":${item.user_ID},
                "isbn": ${item.isbn}, 
                "bookID": ${item.bookID}
            }`,
          };
        }
      } else {
        return {
          statusCode: 201,
          body: `{ "message": "You are not a registered user. Register Yourself or provide correct user Key" }`,
        };
      }
    }
  } catch (error) {
    console.log("Error = ", error);
    return {
      statusCode: 500,
      body: error,
    };
  }
}
