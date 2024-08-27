import { App, Duration } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group configuration', () => {
  it('should allow manual traffic routing configuration', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      trafficRoutingConfig: 'MANUALLY',
      manualTrafficRoutingTimeout: Duration.minutes(5),
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
            '{"actionOnTimeout":"STOP_DEPLOYMENT","waitTimeInMinutes":5}',
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

  it('should allow automatic traffic routing configuration', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      trafficRoutingConfig: 'AUTOMATICALLY',
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
          Match.stringLikeRegexp('{"actionOnTimeout":"CONTINUE_DEPLOYMENT"}'),
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
