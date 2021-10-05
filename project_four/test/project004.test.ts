import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Project004 from '../lib/project004-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Project004.Project004Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
