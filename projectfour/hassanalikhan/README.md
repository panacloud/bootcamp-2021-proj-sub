# BootCamp2021 Project04: Simple Book API

## Usage

<table>
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Description</th>
      <th>Method</th>
      <th>Path</th>
      <th>Auth.</th>
      <th>Request Body</th>
      <th>Query</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=1>1</td>
      <td rowspan=1>API base URL</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/</td>
      <td rowspan=1>No</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>2</td>
      <td rowspan=1>Check Status of API</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/status</td>
      <td rowspan=1>No</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1>Add book</td>
      <td rowspan=1>POST</td>
      <td rowspan=1>/books</td>
      <td rowspan=1>No</td>
      <td rowspan=1><sub>{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"book": "Book Name",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"author": "Authos's Name",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"isbn": "Book isbn",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"book_type": "type",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"price": Book Price,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"stock": Number of books,<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"available": true<br>}</sub></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>4</td>
      <td rowspan=1>Get all books</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/books</td>
      <td rowspan=1>No</td>
      <td rowspan=1></td>
      <td rowspan=1><sub>book_type<br>limit</sub></td>
    </tr>
    <tr>
      <td rowspan=1>5</td>
      <td rowspan=1>Get one book</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/books/:bookID</td>
      <td rowspan=1>No</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>6</td>
      <td rowspan=1>Register User</td>
      <td rowspan=1>POST</td>
      <td rowspan=1>/api-clients</td>
      <td rowspan=1>No</td>
      <td rowspan=1><sub>{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"userName": "User's Name",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"userEmail": "User's Email"<br>}</sub></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>7</td>
      <td rowspan=1>Place Order</td>
      <td rowspan=1>POST</td>
      <td rowspan=1>/orders</td>
      <td rowspan=1>Yes</td>
      <td rowspan=1><sub>{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"bookID": "ID of Book",<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"noOfBooks": "No. of Books"<br>}</sub></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>8</td>
      <td rowspan=1>Get all Orders</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/orders</td>
      <td rowspan=1>Yes</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>9</td>
      <td rowspan=1>Get one Order</td>
      <td rowspan=1>GET</td>
      <td rowspan=1>/orders/:orderID</td>
      <td rowspan=1>Yes</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>10</td>
      <td rowspan=1>Delete an Order</td>
      <td rowspan=1>DELETE</td>
      <td rowspan=1>/orders/:orderID</td>
      <td rowspan=1>Yes</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>11</td>
      <td rowspan=1>Update an Order</td>
      <td rowspan=1>PATCH</td>
      <td rowspan=1>/orders/:orderID</td>
      <td rowspan=1>Yes</td>
      <td rowspan=1><sub>{<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"noOfBooks": "No of Books"<br>}</sub></td>
      <td rowspan=1></td>
    </tr>
  </tbody>
</table>

## Steps to code "Simple Book API"

### 1. Create a basic cdk app

Create and navigate to new directory using `mkdir hassanalikhan && cd hassanalikhan`. Create a new cdk project using `cdk init app --language typescript`. As typescript is used for coding so transcribing the code to javascript is necessary, one way is to build the app in the end other is to use `npm run watch` to auto compile the code whenever any file is changed so use the latter option. To synthesize the app use `cdk synth` this will output the cloud formation template. Bootstrap the app using `cdk bootstrap`, bootstrapping is necessary only in case when app is deployed for the first time. Deploy the app using `cdk deploy`.

### 2. Create a basic REST API

Purpose of this project is to create a rest api where one can send different requests. So the very first step is to make a rest api (root path) from where one can send different requests. Create a welcome message lambda function in the stack by updating "lib/hassanalikhan-stack.ts". As this project is created using "cdk 2" so no need to install aws modules separately, all of them can be imported from "aws-cdk-lib", for any older version all modules to be installed separately.

```js
// Lambda Function
import { aws_lambda as lambda } from "aws-cdk-lib";
const welcomeFunction = new lambda.Function(this, "welcomeFunction", {
  functionName: "Welcome-Function-Simple-Book-Api",
  runtime: lambda.Runtime.NODEJS_14_X,
  code: lambda.Code.fromAsset("lambdas"),
  handler: "welcome.handler",
  memorySize: 1024,
});
```

Rest api's can be created using api gateway. Update "lib/hassanalikhan-stack.ts" for creating a rest api using api gateway. This will create a new rest api and results in a URL which is going to work as the base path for the api.

```js
// New Rest Api
import { aws_apigateway as apigw } from "aws-cdk-lib";
const api = new apigw.RestApi(this, "simpleBookApi", {
  restApiName: "Simple Book Api",
});
```

When ever one sends a request to the api some lambda function is to be invoked, so create api integration for the lambda function by updating "lib/hassanalikhan-stack.ts".

```js
// Lambda integration
const welcomeFunctionIntegration = new apigw.LambdaIntegration(welcomeFunction);
```

Api is already defined which creates a base URL. Now there is a need of a method on the root path so one is able to send a request and invoke the lambda function. Thus update "lib/hassanalikhan-stack.ts" to add a GET method to the root path and attach welcome function integration to it.

```js
// Add method to api
api.root.addMethod("GET", welcomeFunctionIntegration);
```

Create "lambdas/welcome.ts" to define handler for the welcome lambda function. This will return simple welcome message when the function is invoked successfuly or an error message in-case of failure.

```js
// lambda handler
export async function handler() {
  try {
    return {
      statusCode: 201,
      body: `{ "message": "Welcome to Simple Book API" }`,
    };
  } catch (error) {
    return { statusCode: 500, body: error };
  }
}
```

For all the upcomming steps, methods to create a lambda function, integrating lambda function,adding a method and creating handler code will always remain the same so for checking out the detailed code refer to respective file.

Deploy the app using `cdk deploy`. This will deploy the app on aws and returns the api base URL on console. Deployed stack can be seen in the cloudformation console, lambda in the lambda console and rest api in the apigateway console. API url can also be accessed in api settings in the console which will be of the following form

```
https://**********.execute-api.*********.amazonaws.com/prod
```

Rest API's can be tested by various ways. One is to use "postman". Create a new collection in a postman workspace. Create a new GET request in the collection and provide API URL in it. One can make a new varibale to store the URL so it is easy to use while creating new requests. Send request and after successful execution reponse will be as follows. While adding methods "GET" option is selected so in case one send a request other than GET will results in a "Missing Authentication Token" message.

![Welcome Message](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0201.PNG)

### 3. Create method to check status

Create a method to check status of the api by adding a subpath to the API. For that first update "lib/hassanalikhan-stack.ts" and

- create a new lambda function
- create api lambda integration
- add status resource to root path (new path defination)
- add a get method on the lambda integartion for status resource.
- Add CORS options to resource.

```js
// Add resource
const status = api.root.addResource("status");
// Method for resource
status.addMethod("GET", statusFunctionIntegration);
// CORS options for the resource
addCorsOptions(status);
```

Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. So there is need to define CORS function.

```js
// CORS options function
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
```

Create "lambdas/status.ts" to define handler for the status lambda function. This will return simple message as response both in case of success or failure.

Deploy the app using `cdk deploy` and then test the api using postman. For testing create new GET request with `/status` path and send the request. After successful execution reponse will be as follows

![API Status Ok](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0301.PNG)

### 4. Create method to add new book

This api is about orders for a book so first of all we need a method to add books to the database. In this project DynamoDB is used as database. Update "lib/hassanalikhan-stack.ts" to define a new dynamodb table for storing books.

```js
// DynamoDB Table
import { aws_dynamodb as ddb } from "aws-cdk-lib";
const allBooksTable = new ddb.Table(this, "AllBooksTable", {
  tableName: "Simple_Book_Api_All_Books",
  partitionKey: {
    name: "bookID",
    type: ddb.AttributeType.STRING,
  },
});
```

Update "lib/hassanalikhan-stack.ts" and

- create a lambda function to add new book to database need to define environment variables
- grant read write permission for all books table.
- create lambda integration
- create resource
- create method
- add Cors options for books resource.

One thing to keep in mind POST method is to be used here as we are adding data to ddb table.

```js
// Lambda function
const addBooksFunction = new lambda.Function(this, "addBooksFunction", {
  ---
  ---
  ---
  environment: {
    PRIMARY_KEY_ALL: "bookID",
    TABLE_NAME_ALL: allBooksTable.tableName,
  },
});
// DynamoDb table permissions
allBooksTable.grantReadWriteData(addBooksFunction);
```

Install "aws-sdk" using `npm i aws-sdk` as we need to use AWS resources in the lambda function. Create "lambdas/addBooks.ts" to define the handler for addBooks function so new book can be added into the database. New book can be added by provding book data in the request body. Before adding a book to the database check if

- the body is provided with correct number of parameters in the request
- all required parameters are given in correct format.

Deploy the app using `cdk deploy`. All our changes will be deployed and a new DynamoDB table will be created as well. For testing create new POST request on postman with sub path `/books`. When no body is given sending this request will return an invalid request message.

![No Request body](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0401.PNG)

In case more than required parameters are given in body again same invalid request message will be returned.

![More than required params.](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0402.PNG)

If some of the parameters are missing or in wrong format another error message will be recieved.

![Missing params or invalid format](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0403.PNG)

If all the conditions are staisfied book will be added to table.

![Book Added](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0404.PNG)

If there is some error with DynamoDB it will be returned as well.

### 5. Create method to list all books

Create a method so we can get all books from the database. Update "lib/hassanalikhan-stack.ts" to

- create a lambda function to get all books from database and set environment variables
- grant read write permission for all books table
- create lambda integration
- add a method.

One thing to keep in mind GET method is to be used here as we are getting data from ddb table. We need to define request parameters while adding a method to books resource.

```js
// Method with request parameters
books.addMethod("GET", allBooksFunctionIntegration, {
  requestParameters: {
    "method.request.querystring.book_type": false,
    "method.request.querystring.limit": false,
  },
});
```

Create "lambdas/allBooks.ts" to define the handler for allBooks function so books can be listed from database. Before listing all books from the database following conditons are implemented in the handler code

- When there is no book in db return a message
- if format for query parameter is wrong return a message.
- if book of said type not in list return a message
- When no query parameters are given all books to be rturned.

Deploy the app using `cdk deploy`. Test the API using postman.For testing create new GET request on postman with sub path `/books`.
When there are no books stored in the dynamoDB table a message will be returned stating no books available.

![All Books with empty database](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0501.PNG)

We can also add query parameters and when query parameters are given but book_type mismatch or limit not numeric again an error will be returned.

![book_type in query is incorrect](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0502.PNG)

![limit in query is not numeric](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0503.PNG)

If there is no book with requested book type again a message will be returned as follows.

![No book with requested type](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0504.PNG)

Adding correct query parameters in correct format will return results as requested and one more thing any query other than book_type and limit will not be processed.

![Query prameters with request](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0505.PNG)

If there are books in database and no query all books will be returned

![All Books](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0506.PNG)

### 6. Create method to list one book

Create a method so we can get one book from the database. Update "lib/hassanalikhan.ts" to

- create a lambda function to get one book from database and set environment variables
- grant read write permission for all books table
- create lambda integration,
- add resource to books resource
- add method
- add CORS options.

```js
// Resource to another resource
const oneBook = books.addResource("{id}");
```

One thing to keep in mind GET method is to be used here as we are getting data from ddb table. Create "lambdas/oneBook.ts" to define the handler for oneBook function so one book can be listed from database. Need a book_id in request path and if no book with requested id will returns a message. Deploy the app using `cdk deploy`. Test the API using postman.For testing create new GET request on postman with sub path `/books/:book_id`. If there is no book in the database with requested id a message telling about no book will be returned.

![Single book not in database](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0601.PNG)

And if book is present it will be returned.

![Single book](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0602.PNG)

### 7. Create method for user Auth.

Create a method so we can register a user as we need to manage orders thus a user should be registered with the api. Update "lib/hassanalikhan-stack.ts" to

- create a DynamoDb table to store user data and lambda function to register user in database
- grant read write permission for users table.
- Create lambda integration,
- add resource to root
- add method
- add CORS options.

One thing to keep in mind POST method is to be used here as we are putting data to ddb table. While defining lambda function need to define environment variables. Create "lambdas/userAuth.ts" to define the handler for userAuth function so user can b registered.

- If no body is given or more than required parameters given return a message
- if few parameters are missing or email is in wrong format invalid request message to be returned.
- If there is already registered user with same email user data to be displayed
- in case every thing goes well user will be registered.

Deploy the app using `cdk deploy`. Test user Auth functionality by adding new Post request with `/api-clients` to register new user. If there is no request body, more or less than necessary parameters are given we will recieve an invalid request message as in step 04 (add new book). If while registering email is given in wrong format an invalid request message will be returned.

![Wrong email format](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0701.PNG)

If user is already registered user details will be displayed with relevent message.

![Already registered user](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0702.PNG)

If every thing goes well user will be registered

![register user](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0703.PNG)

### 8. Create method to place order

Create a method so we can place an order. Update "lib/hassanalikhan-stack.ts" to

- create a DynamoDb table to store all orders
- lambda function to place order and save in database and grant read write permission for users, books and orders table.
- create lambda integration
- create orders resource
- add method on orders resource and CORS option.

One thing to keep in mind POST method is to be used here as we are putting data to ddb table. While defining lambda function need to define environment variables. Create "lambdas/placeOrder.ts" to define the handler for placeOrder function so order can be placed. In handler code do some checks

- if bearer token is provided or not
- check if body parameters are given in correct numbers
- check if all parameters are given in correct format
- check if users are registered in database and said user is in database.
- check if book with said id is in the database.
- If all conditions are fulfilled place the order.

Deploy the app using `cdk deploy`. Test place order functionality by adding new Post request with `/orders` to place new order. If there is no auth token or given with wrong configartion an error will return in such case.

![Auth Error](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0801.PNG)

To add Auth token from collection settings select bearer token and add user Id there.

![Add Auth](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0802.PNG)

After providing auth token if no body is provided or body parameters in wrong format or more than required parameters are provided again error message will be recieved same as in step 4 and 7. If there are no users in the database or the provided Auth is not from a registered users we recieve following message.

![Not a user](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0803.PNG)

If there is no book with provided Id a message will be returned as the one in step 06. While successful execution will place the order

![Order Placed](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0804.PNG)

### 9. Create method to list all orders

Create a method so we can list all orders. Update "lib/simple-book-api-stack.ts" to create a lambda function to get all orders grant read write permission for ddb table. Also create lambda integration, and method. One thing to keep in mind GET method is to be used here as we are getting data from ddb table. While defining lambda function need to define environment variables. Create "lambdas/allOrders.ts" to define the handler for allOrder function so all orders can be scanned. In handler code do some checks such as if bearer token is provided or not for authantication, check if users are registered in database and said user is in database. check if there are orders in the table and also check if orders are placed by current user. If all conditions are fulfilled list all orders. Deploy the app using `cdk deploy`.

Test all orders functionality by adding new GET request with `/orders` to get all orders. If there is no auth token or given with wrong configartion an error will return in such case. To add Auth token from collection settings select bearer token and add user Id there. If there are no users in the database or the provided Auth is not from a registered users we recieve error message. If there is no orders in list or with given userID again message will be returned.

![All Orders](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0901.PNG)

If all conditions are fullfilled results are as follows.

![All Orders](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step0902.PNG)

### 10. Create method to list one order

Create a method so we can list one order. Update "lib/simple-book-api-stack.ts" to create a lambda function to get one order grant read write permission for ddb table. Also create lambda integration, resource and method. One thing to keep in mind GET method is to be used here as we are getting data from ddb table. While defining lambda function need to define environment variables. Create "lambdas/oneOrder.ts" to define the handler for oneOrder function so one orders can be obtained. In handler code do some checks such as if bearer token is provided or not for authantication, check if users are registered in database and said user is in database. check if there are orders in the table and also check if order is placed by current user. If all conditions are fulfilled list requested order. Deploy the app using `cdk deploy`.
Test all orders functionality by adding new GET request with `/orders/:orderID` to get one order.
If there is no auth token or given with wrong configartion an error will return in such case. To add Auth token from collection settings select bearer token and add user Id there. If there are no users in the database or the provided Auth is not from a registered users we recieve error message. If there is no order with provided Id or with given userID again message will be returned. These condotions are documented in above cases. If all conditions are fullfilled result will be as follows.

![One Order](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step1001.PNG)

### 11. Create method to delete one order

Create a method so we can delete one order. Update "lib/simple-book-api-stack.ts" to create a lambda function to delete one order grant read write permission for ddb table. Also create lambda integration, resource and method. One thing to keep in mind DELETE method is to be used here as we are deleting data from ddb table. While defining lambda function need to define environment variables. Create "lambdas/deleteOneOrder.ts" to define the handler for deleteOneOrder function so one order can be delete from database. Deploy the app using `cdk deploy`.

Test delete order functionality by adding new DELETE request with `/orders/:orderID` to get one order.
If there is no auth token or given with wrong configartion or no path id an error will return in such case.

![No path ID](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step1101.PNG)

To add Auth token from collection settings select bearer token and add user Id there. If there are no users in the database or the provided Auth is not from a registered users we recieve error message. If there is no order with provided Id or with given userID again message will be returned. These condotions are documented in above cases. If all conditions rae fullfilled results are as follows.

![Delete One Order](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step1102.PNG)

### 12. Create method to update one order

Next step is to create a resource so we can update one order. Update "lib/simple-book-api-stack.ts" to create a lambda function to update one order grant read write permission for ddb table. Also create lambda integration, resource and method. One thing to keep in mind PATCH method is to be used here as we are updating data from ddb table. While defining lambda function need to define environment variables Create "lambdas/deleteOneOrder.ts" to define the handler for deleteOneOrder function so one order can be delete from database. Deploy the app using `cdk deploy`.

Test update order functionality by adding new PATCH request with `/orders/:orderID` to get one order. If there is no auth token or given with wrong configartion or no path id or wrong format in body an error will return in such case. To add Auth token from collection settings select bearer token and add user Id there. If there are no users in the database or the provided Auth is not from a registered users we recieve error message. If there is no order with provided Id or with given userID again message will be returned. These condotions are documented in above cases. If all conditions rae fullfilled results are as follows.

![Delete One Order](https://github.com/hassan-ak/simple-book-api/blob/main/snaps/step1201.PNG)

### 13. Destroy App

Destroy App using `cdk destroy`
