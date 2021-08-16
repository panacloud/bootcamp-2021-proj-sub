import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
//-------------------------------import dynamo
import * as dynamodb from '@aws-cdk/aws-dynamodb'

export interface HitCounterProps {
  /** the function for which we want to count url hits **/
  downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {
/** allows accessing the counter function */
public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

//-------------------- defined a DynamoDB table with path as the partition key.

    const table = new dynamodb.Table(this, 'Hits', {
        partitionKey: { name: 'path', type: dynamodb.AttributeType.STRING }
    });


//------------We defined a Lambda function which is bound to the lambda/hitcounter.handler code.

    this.handler = new lambda.Function(this, 'HitCounterHandler', {
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: 'hitcounter.handler',
        code: lambda.Code.fromAsset('lambda'),

//----------We defined a Lambda function which is bound to the lambda/hitcounter.handler code.

        environment: {
            DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
            HITS_TABLE_NAME: table.tableName
        }
    });
  }
}