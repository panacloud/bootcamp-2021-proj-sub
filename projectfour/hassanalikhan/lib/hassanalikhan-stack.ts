import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_lambda as lambda } from "aws-cdk-lib";
import { aws_apigateway as apigw } from "aws-cdk-lib";
import { aws_dynamodb as ddb } from "aws-cdk-lib";

export class HassanalikhanStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // ********************************
    // ***      DynamoDB Tables     ***
    // ********************************
    // DynamoDB table to store all books
    const allBooksTable = new ddb.Table(this, "AllBooksTable", {
      tableName: "Simple_Book_Api_All_Books",
      partitionKey: {
        name: "bookID",
        type: ddb.AttributeType.STRING,
      },
    });
    // DynamoDB table to store users
    const usersTable = new ddb.Table(this, "UsersTable", {
      tableName: "Simple_Book_Api_Users",
      partitionKey: {
        name: "userEmail",
        type: ddb.AttributeType.STRING,
      },
    });
    // DynamoDB table to store orders
    const allOrdersTable = new ddb.Table(this, "AllOrdersTable", {
      tableName: "Simple_Book_Api_All_Orders",
      partitionKey: {
        name: "orderID",
        type: ddb.AttributeType.STRING,
      },
    });

    // ********************************
    // ***     Lambda Functions     ***
    // ********************************
    // Lambda function to display welcome message
    const welcomeFunction = new lambda.Function(this, "welcomeFunction", {
      functionName: "Welcome-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "welcome.handler",
      memorySize: 1024,
    });
    // Lambda function to check API status
    const statusFunction = new lambda.Function(this, "statusFunction", {
      functionName: "Status-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "status.handler",
      memorySize: 1024,
    });
    // Lambda function to add new book to ddb table
    const addBooksFunction = new lambda.Function(this, "addBooksFunction", {
      functionName: "Add-Books-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "addBooks.handler",
      memorySize: 1024,
      environment: {
        PRIMARY_KEY_ALL: "bookID",
        TABLE_NAME_ALL: allBooksTable.tableName,
      },
    });
    // Lambda function to get list of all books
    const allBooksFunction = new lambda.Function(this, "allBooksFunction", {
      functionName: "All-Books-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "allBooks.handler",
      memorySize: 1024,
      environment: {
        TABLE_NAME_ALL: allBooksTable.tableName,
      },
    });
    // Lambda function to list full details of a book
    const oneBookFunction = new lambda.Function(this, "oneBookFunction", {
      functionName: "One-Book-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "oneBook.handler",
      memorySize: 1024,
      environment: {
        PRIMARY_KEY_ALL: "bookID",
        TABLE_NAME_ALL: allBooksTable.tableName,
      },
    });
    // Lambda function to register user
    const userAuthFunction = new lambda.Function(this, "userAuthFunction", {
      functionName: "User-Auth-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "userAuth.handler",
      memorySize: 1024,
      environment: {
        PRIMARY_KEY_USER: "userEmail",
        TABLE_NAME_USER: usersTable.tableName,
      },
    });
    // Lambda function to place order
    const placeOrderFunction = new lambda.Function(this, "placeOrderFunction", {
      functionName: "Place-Order-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "placeOrder.handler",
      memorySize: 1024,
      environment: {
        TABLE_NAME_USER: usersTable.tableName,
        PRIMARY_KEY_ALL: "bookID",
        TABLE_NAME_ALL: allBooksTable.tableName,
        PRIMARY_KEY_ORDER: "orderID",
        TABLE_NAME_ORDER: allOrdersTable.tableName,
      },
    });
    // Lambda function to list all orders
    const allOrdersFunction = new lambda.Function(this, "allOrdersFunction", {
      functionName: "All-Orders-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "allOrders.handler",
      memorySize: 1024,
      environment: {
        TABLE_NAME_USER: usersTable.tableName,
        TABLE_NAME_ORDER: allOrdersTable.tableName,
      },
    });
    // Lambda function to get one order
    const oneOrderFunction = new lambda.Function(this, "oneOrderFunction", {
      functionName: "One-Order-Function-Simple-Book-Api",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "oneOrder.handler",
      memorySize: 1024,
      environment: {
        TABLE_NAME_USER: usersTable.tableName,
        TABLE_NAME_ORDER: allOrdersTable.tableName,
        PRIMARY_KEY_ORDER: "orderID",
      },
    });
    // Lambda function to delete one order
    const deleteOneOrderFunction = new lambda.Function(
      this,
      "deleteOneOrderFunction",
      {
        functionName: "Delete-One-Order-Function-Simple-Book-Api",
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset("lambdas"),
        handler: "deleteOneOrder.handler",
        memorySize: 1024,
        environment: {
          TABLE_NAME_USER: usersTable.tableName,
          TABLE_NAME_ORDER: allOrdersTable.tableName,
          PRIMARY_KEY_ORDER: "orderID",
        },
      }
    );
    // Lambda fumction to update one order
    const updateOneOrderFunction = new lambda.Function(
      this,
      "updateOneOrderFunction",
      {
        functionName: "Update-One-Order-Function-Simple-Book-Api",
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset("lambdas"),
        handler: "updateOneOrder.handler",
        memorySize: 1024,
        environment: {
          TABLE_NAME_USER: usersTable.tableName,
          TABLE_NAME_ORDER: allOrdersTable.tableName,
          PRIMARY_KEY_ORDER: "orderID",
        },
      }
    );

    // ********************************
    // ***  DynamoDB's Permissions  ***
    // ********************************
    // Grant the Lambda function's read and write access to the All books table
    allBooksTable.grantReadWriteData(addBooksFunction);
    allBooksTable.grantReadWriteData(allBooksFunction);
    allBooksTable.grantReadWriteData(oneBookFunction);
    allBooksTable.grantReadWriteData(placeOrderFunction);
    // Grant the Lambda function's read and write access to the All users table
    usersTable.grantReadWriteData(userAuthFunction);
    usersTable.grantReadWriteData(placeOrderFunction);
    usersTable.grantReadWriteData(allOrdersFunction);
    usersTable.grantReadWriteData(oneOrderFunction);
    usersTable.grantReadWriteData(deleteOneOrderFunction);
    usersTable.grantReadWriteData(updateOneOrderFunction);
    // Grant the Lambda function's read and write access to the All orders table
    allOrdersTable.grantReadWriteData(placeOrderFunction);
    allOrdersTable.grantReadWriteData(allOrdersFunction);
    allOrdersTable.grantReadWriteData(oneOrderFunction);
    allOrdersTable.grantReadWriteData(deleteOneOrderFunction);
    allOrdersTable.grantReadWriteData(updateOneOrderFunction);

    // ********************************
    // ***         Rest API         ***
    // ********************************
    // Rest API using API gateway
    const api = new apigw.RestApi(this, "simpleBookApi", {
      restApiName: "Simple Book Api",
    });

    // ********************************
    // ***  API Lambda Integration  ***
    // ********************************
    // Lambda integration for welcome function
    const welcomeFunctionIntegration = new apigw.LambdaIntegration(
      welcomeFunction
    );
    // Lambda integration for status function
    const statusFunctionIntegration = new apigw.LambdaIntegration(
      statusFunction
    );
    // Lambda integration for addBooks function
    const addBooksFunctionIntegration = new apigw.LambdaIntegration(
      addBooksFunction
    );
    // Lambda integration for allBooks function
    const allBooksFunctionIntegration = new apigw.LambdaIntegration(
      allBooksFunction
    );
    // Lambda integration for oneBook function
    const oneBookFunctionIntegration = new apigw.LambdaIntegration(
      oneBookFunction
    );
    // Lambda integration for userAuth function
    const userAuthFunctionIntegration = new apigw.LambdaIntegration(
      userAuthFunction
    );
    // Lambda integration for placeOrder function
    const placeOrderFunctionIntegration = new apigw.LambdaIntegration(
      placeOrderFunction
    );
    // Lambda integration for allOrders function
    const allOrdersFunctionIntegration = new apigw.LambdaIntegration(
      allOrdersFunction
    );
    // Lambda integration for oneOrder function
    const oneOrderFunctionIntegration = new apigw.LambdaIntegration(
      oneOrderFunction
    );
    // Lambda integartion for deleteOrder function
    const deleteOneOrderFunctionIntegration = new apigw.LambdaIntegration(
      deleteOneOrderFunction
    );
    // Lambda integration for UpdateOrder function
    const updateOneOrderFunctionIntegration = new apigw.LambdaIntegration(
      updateOneOrderFunction
    );

    // ********************************
    // ***     Resources of API     ***
    // ********************************
    // Status resources
    const status = api.root.addResource("status");
    // books resources
    const books = api.root.addResource("books");
    // one book resources
    const oneBook = books.addResource("{id}");
    // User Auth resource
    const userAuth = api.root.addResource("api-clients");
    // Orders resource
    const orders = api.root.addResource("orders");
    // One Order resource
    const oneOrder = orders.addResource("{id}");

    // ********************************
    // ***      Methods on API      ***
    // ********************************
    // Method for root path (GET:"/")
    api.root.addMethod("GET", welcomeFunctionIntegration);
    // Method for status path (GET:"/status")
    status.addMethod("GET", statusFunctionIntegration);
    // Method for adding new book (POST:"/books")
    books.addMethod("POST", addBooksFunctionIntegration);
    // Method for listing all books (GET:"/books")
    books.addMethod("GET", allBooksFunctionIntegration, {
      requestParameters: {
        "method.request.querystring.book_type": false,
        "method.request.querystring.limit": false,
      },
    });
    // Method for listing one book (GET:"/books/:book_id")
    oneBook.addMethod("GET", oneBookFunctionIntegration);
    // Method to register user with api
    userAuth.addMethod("POST", userAuthFunctionIntegration);
    // Method to place order
    orders.addMethod("POST", placeOrderFunctionIntegration);
    // Method to list all orders
    orders.addMethod("GET", allOrdersFunctionIntegration);
    // Method to list one order
    oneOrder.addMethod("GET", oneOrderFunctionIntegration);
    // Method to delete one order
    orders.addMethod("DELETE", deleteOneOrderFunctionIntegration);
    oneOrder.addMethod("DELETE", deleteOneOrderFunctionIntegration);
    // Methods to update one order
    orders.addMethod("PATCH", updateOneOrderFunctionIntegration);
    oneOrder.addMethod("PATCH", updateOneOrderFunctionIntegration);

    // ********************************
    // *** CORS option for resource ***
    // ********************************
    addCorsOptions(status);
    addCorsOptions(books);
    addCorsOptions(oneBook);
    addCorsOptions(userAuth);
    addCorsOptions(orders);
    addCorsOptions(oneOrder);
  }
}

// ********************************
// ***   CORS Option Function   ***
// ********************************
export function addCorsOptions(apiResource: apigw.IResource) {
  apiResource.addMethod(
    "OPTIONS",
    new apigw.MockIntegration({
      integrationResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers":
              "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
            "method.response.header.Access-Control-Allow-Origin": "'*'",
            "method.response.header.Access-Control-Allow-Credentials":
              "'false'",
            "method.response.header.Access-Control-Allow-Methods":
              "'OPTIONS,GET,PUT,POST,DELETE'",
          },
        },
      ],
      passthroughBehavior: apigw.PassthroughBehavior.NEVER,
      requestTemplates: {
        "application/json": '{"statusCode": 200}',
      },
    }),
    {
      methodResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Headers": true,
            "method.response.header.Access-Control-Allow-Methods": true,
            "method.response.header.Access-Control-Allow-Credentials": true,
            "method.response.header.Access-Control-Allow-Origin": true,
          },
        },
      ],
    }
  );
}
