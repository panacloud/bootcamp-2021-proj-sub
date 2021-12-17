// Here CDK application’s main stack is defined.

// Imports
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import { HitCounter } from "./hitcounter";
import { TableViewer } from "cdk-dynamo-table-viewer";

// Main stack for the app
export class HassanalikhanStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Code that defines your stack goes here

    // Hello lambda function
    // AWS lambda resource
    const hello = new lambda.Function(this, "HelloLambda", {
      runtime: lambda.Runtime.NODEJS_14_X, // execution environment
      code: lambda.Code.fromAsset("lambda"), // code loaded from "lambda" directory
      handler: "hello.handler", // file is "hello", function is "handler"
    });

    // attach hello lambda function to the HitCounter API
    const helloWithCounter = new HitCounter(this, "HelloHitCounter", {
      downstream: hello,
    });

    // defines an API Gateway REST API resource backed by our "HitCounter" function.
    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: helloWithCounter.handler,
    });

    // TableViewr to access table through some URL
    new TableViewer(this, "ViewHitsTable", {
      title: "BootCamp2021 Project03 HitCounter",
      table: helloWithCounter.table,
      sortBy: "-hits",
    });
  }
}
