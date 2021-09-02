#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkHitCounterStack } from '../lib/cdk_hit_counter-stack';

const app = new cdk.App();
new CdkHitCounterStack(app, 'CdkHitCounterStack', {

});
