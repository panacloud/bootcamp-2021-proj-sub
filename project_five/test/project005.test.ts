import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Project005 from '../lib/project005-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Project005.Project005Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
