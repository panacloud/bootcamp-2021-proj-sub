#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ProjectthreeStack } from '../lib/projectthree-stack';

const app = new cdk.App();
new ProjectthreeStack(app, 'ProjectthreeStack');
