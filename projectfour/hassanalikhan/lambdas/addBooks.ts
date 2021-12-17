import * as AWS from "aws-sdk";
import { randomBytes } from "crypto";
const db = new AWS.DynamoDB.DocumentClient();

// enivronment variables
const PRIMARY_KEY_ALL = process.env.PRIMARY_KEY_ALL || "";
const TABLE_NAME_ALL = process.env.TABLE_NAME_ALL || "";

export const handler = async (event: any = {}): Promise<any> => {
  // Check if body parameters are given and number of parameters are as required for the request
  if (!event.body || Object.keys(JSON.parse(event.body)).length > 7) {
    return {
      statusCode: 400,
      body: `Invalid Request, Body parameters missing or too many parameters given. Give parameters in the following format.\n{
          "book": "Book Name", 
          "author": "Authos's Name", 
          "isbn": "Book isbn", 
          "book_type": "Book Type (fiction/non-fiction)",
          "price": Book Price, 
          "stock": Number of books to be added, 
          "available": true
        }`,
    };
  }
  // Get book parameters from request body and store them in a varibale
  const item =
    typeof event.body == "object" ? event.body : JSON.parse(event.body);
  // Check if body parameters are in correct form
  if (
    !item.book ||
    !item.author ||
    !item.isbn ||
    !(item.book_type === "fiction" || item.book_type === "non-fiction") ||
    !!(isNaN(item.price) || item.price < 0) ||
    !!(isNaN(item.stock) || item.stock % 1 != 0 || item.stock < 0) ||
    !item.available
  ) {
    return {
      statusCode: 400,
      body: `Invalid Request, Few body parameters missing or in wrong format. Give parameters correctly.\n{
        "book": ${item.book || "Parameter Missing"}, 
        "author": ${item.author || "Parameter Missing"}, 
        "isbn": ${item.isbn || "Parameter Missing"}, 
        "book_type": ${
          !item.book_type
            ? "Parameter Missing"
            : !(
                item.book_type === "fiction" || item.book_type === "non-fiction"
              )
            ? `Give "fiction" or "non-fiction" for book_type`
            : item.book_type
        },
        "price": ${
          !item.price
            ? "Parameter Missing"
            : !!(isNaN(item.price) || item.price < 0)
            ? "Give a positive number for price"
            : item.price
        }, 
        "stock": ${
          !item.stock
            ? "Parameter Missing"
            : !!(isNaN(item.stock) || item.stock % 1 != 0 || item.stock < 0)
            ? "Give a positive whole number for stock"
            : item.price
        }, 
        "available": ${item.available || "Parameter Missing"}
      }`,
    };
  }
  // Asign book_id and set params to be passed to ddb operation
  item[PRIMARY_KEY_ALL] = randomBytes(32).toString("hex");
  const params = {
    TableName: TABLE_NAME_ALL,
    Item: item,
  };

  // When all conditions are good to go, put data in the table and return item as output
  try {
    await db.put(params).promise();
    return {
      statusCode: 200,
      body: `Book with following detail is success-fully added to the database.\n{
        "book": ${item.book}, 
        "author": ${item.author}, 
        "bookID":${item.bookID}, 
        "isbn": ${item.isbn}, 
        "book_type": ${item.book_type},
        "price": ${item.price}, 
        "stock": ${item.stock}, 
        "available": ${item.available}
      }`,
    };
  } catch (err) {
    // in case of DDB error return error
    return { statusCode: 500, body: err };
  }
};
