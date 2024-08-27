import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';

import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group defaults', () => {
  it('should auto-generate name if not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      deploymentGroupName: undefined,
    });
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
    const assertProperties = {
      'Fn::Join': Match.arrayEquals([
        '',
        [
          Match.anyValue(),
          Match.anyValue(),
          // regexp to not match the name because it's auto-generated
          Match.not(Match.stringLikeRegexp('"deploymentGroupName":')),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
        ],
      ]),
    };
    assert.hasResourceProperties('Custom::ServerBlueGreenDeploymentGroup', {
      Create: assertProperties,
      Update: assertProperties,
    });
  });

  it('should create an CodeDeploy Application if not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      application: undefined,
    });
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
    assert.resourcePropertiesCountIs(
      'AWS::CodeDeploy::Application',
      {
        ComputePlatform: 'Server',
      },
      2, // 2 because the default application is created in addition to the one created by the test stack
    );
  });

  it('should create an IAM Role if not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      role: undefined,
    });
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
    assert.resourcePropertiesCountIs(
      'AWS::IAM::Role',
      {
        AssumeRolePolicyDocument: {
          Statement: [
            {
              Action: 'sts:AssumeRole',
              Effect: 'Allow',
              Principal: {
                Service: 'codedeploy.amazonaws.com',
              },
            },
          ],
          Version: '2012-10-17',
        },
      },
      2, // 2 because the default role is created in addition to the one created by the test stack
    );
  });

  it('uses default deployment config if not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      deploymentConfig: undefined,
    });
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
  });

  it('should disable auto rollback if not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      autoRollback: undefined,
    });
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
    const assertProperties = {
      'Fn::Join': Match.arrayEquals([
        '',
        [
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.stringLikeRegexp(
            '"autoRollbackConfiguration":{"enabled":false,"events":\\[\\]}',
          ),
        ],
      ]),
    };
    assert.hasResourceProperties('Custom::ServerBlueGreenDeploymentGroup', {
      Create: assertProperties,
      Update: assertProperties,
    });
  });

  it('should default TerminationHook to false', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack');
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
    const assertProperties = {
      'Fn::Join': Match.arrayEquals([
        '',
        [
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.anyValue(),
          Match.stringLikeRegexp('"terminationHookEnabled":false,'),
        ],
      ]),
    };
    assert.hasResourceProperties('Custom::ServerBlueGreenDeploymentGroup', {
      Create: assertProperties,
      Update: assertProperties,
    });
  });
});
