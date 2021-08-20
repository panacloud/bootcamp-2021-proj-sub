import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export interface HitCounterProps {
  /** the function for which we want to count url hits **/
  downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {

    /** allows accessing the counter function */
    public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

    const table = new dynamodb.Table(this, 'Hits', {                      // bounding this with table=path
      partitionKey: { name: 'path', type: dynamodb.AttributeType.STRING }
  });

  this.handler = new lambda.Function(this, 'HitCounterHandler', {         // bounded with lambda/hitcounter.handler
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'hitcounter.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
          DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,        //function name and table names values can only resolve when we delpoy
          HITS_TABLE_NAME: table.tableName
      }
  });


    // grant the lambda role read/write permissions to our table
    table.grantReadWriteData(this.handler);

     // grant the lambda role invoke permissions to the downstream function
    props.downstream.grantInvoke(this.handler);
    

  }
}