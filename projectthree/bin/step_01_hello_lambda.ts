#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Step01HelloLambdaStack } from '../lib/step_01_hello_lambda-stack';

const app = new cdk.App();
new Step01HelloLambdaStack(app, 'Step01HelloLambdaStack');
