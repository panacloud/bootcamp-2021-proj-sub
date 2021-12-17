import * as AWS from "aws-sdk";

const TABLE_NAME_ALL = process.env.TABLE_NAME_ALL || "";

const db = new AWS.DynamoDB.DocumentClient();

export const handler = async (event: any): Promise<any> => {
  const params = {
    TableName: TABLE_NAME_ALL,
    ProjectionExpression: "book, bookID, book_type",
  };
  try {
    const response = await db.scan(params).promise();

    // In case there is no book in data base
    if (response.Count === 0) {
      return {
        statusCode: 201,
        body: `{ "message": "No Books currently available" }`,
      };
    }

    // When there is limit in the query
    if (
      event.queryStringParameters &&
      event.queryStringParameters.limit &&
      !event.queryStringParameters.book_type
    ) {
      if (!parseInt(event.queryStringParameters.limit)) {
        return {
          statusCode: 400,
          body: `{ "Invalid Request": "Enter Limit in numeric form or greater than 0" }`,
        };
      } else {
        if (response.Items) {
          return {
            statusCode: 200,
            body: JSON.stringify(
              response.Items.slice(
                0,
                Math.abs(event.queryStringParameters.limit)
              )
            ),
          };
        }
      }
    }

    // When there is type in query
    if (
      event.queryStringParameters &&
      !event.queryStringParameters.limit &&
      event.queryStringParameters.book_type
    ) {
      if (
        event.queryStringParameters.book_type.toLowerCase() !== "fiction" &&
        event.queryStringParameters.book_type.toLowerCase() !== "non-fiction"
      ) {
        return {
          statusCode: 400,
          body: `{ "Invalid Request": "Type should be 'fiction' or 'non-fiction'" }`,
        };
      } else {
        if (response.Items) {
          if (
            response.Items.filter(
              (item) =>
                item.book_type ===
                event.queryStringParameters.book_type.toLowerCase()
            ).length === 0
          ) {
            return {
              statusCode: 201,
              body: `{ "message": "There is no book of type ${event.queryStringParameters.book_type.toLowerCase()}" }`,
            };
          }
          return {
            statusCode: 200,
            body: JSON.stringify(
              response.Items.filter(
                (item) =>
                  item.book_type ===
                  event.queryStringParameters.book_type.toLowerCase()
              )
            ),
          };
        }
      }
    }

    // When there is both limits in the query
    if (
      event.queryStringParameters &&
      event.queryStringParameters.limit &&
      event.queryStringParameters.book_type
    ) {
      if (
        event.queryStringParameters.book_type.toLowerCase() !== "fiction" &&
        event.queryStringParameters.book_type.toLowerCase() !== "non-fiction"
      ) {
        return {
          statusCode: 400,
          body: `{ "Invalid Request": "Type should be 'fiction' or 'non-fiction'" }`,
        };
      } else {
        if (response.Items) {
          if (
            response.Items.filter(
              (item) =>
                item.book_type ===
                event.queryStringParameters.book_type.toLowerCase()
            ).length === 0
          ) {
            return {
              statusCode: 201,
              body: `{ "message": "There is no book of type ${event.queryStringParameters.book_type.toLowerCase()}" }`,
            };
          } else {
            const results = response.Items.filter(
              (item) =>
                item.book_type ===
                event.queryStringParameters.book_type.toLowerCase()
            );
            console.log(results);
            if (!parseInt(event.queryStringParameters.limit)) {
              return {
                statusCode: 400,
                body: `{ "Invalid Request": "Enter Limit in numeric form or greater than 0" }`,
              };
            } else {
              if (results) {
                return {
                  statusCode: 200,
                  body: JSON.stringify(
                    results.slice(
                      0,
                      Math.abs(event.queryStringParameters.limit)
                    )
                  ),
                };
              }
            }
          }
        }
      }
    }

    // No queries
    return { statusCode: 200, body: JSON.stringify(response.Items) };
  } catch (err) {
    return { statusCode: 500, body: err };
  }
};
