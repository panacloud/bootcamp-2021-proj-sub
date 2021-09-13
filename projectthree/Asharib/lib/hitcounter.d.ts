import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
export interface HitCounterProps {
    /** the function for which we want to count url hits **/
    downstream: lambda.IFunction;
}
export declare class HitCounter extends cdk.Construct {
    /** allows accessing the counter function */
    readonly handler: lambda.Function;
    constructor(scope: cdk.Construct, id: string, props: HitCounterProps);
}
