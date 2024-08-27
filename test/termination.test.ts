import { App, Duration } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group original instances termination policy', () => {
  it('should terminate original instances when set to TERMINATE', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      originalInstancePolicy: 'TERMINATE',
      terminateOriginalInstancesTimeout: Duration.minutes(5),
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
          Match.stringLikeRegexp(
            '"terminateBlueInstancesOnDeploymentSuccess":{"action":"TERMINATE","terminationWaitTimeInMinutes":5}}',
          ),
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

  it('should retain original instances when set to KEEP_ALIVE', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      originalInstancePolicy: 'KEEP_ALIVE',
      terminateOriginalInstancesTimeout: undefined,
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
          Match.stringLikeRegexp(
            '"terminateBlueInstancesOnDeploymentSuccess":{"action":"KEEP_ALIVE"}}',
          ),
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
});
