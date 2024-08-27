import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group', () => {
  it('should create an EC2/On-premise Server Blue Green Deployment Group', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack');
    // THEN
    const assert = Template.fromStack(stack);
    assert.resourceCountIs('AWS::CodeDeploy::Application', 1);
    assert.resourceCountIs('Custom::ServerBlueGreenDeploymentGroup', 1);
  });

  it.each`
    config                                                                            | expectedEvents
    ${{ failedDeployment: true, stoppedDeployment: true, deploymentInAlarm: true }}   | ${['DEPLOYMENT_STOP_ON_REQUEST', 'DEPLOYMENT_STOP_ON_ALARM', 'DEPLOYMENT_FAILURE']}
    ${{ failedDeployment: true, stoppedDeployment: false, deploymentInAlarm: false }} | ${['DEPLOYMENT_FAILURE']}
    ${{ failedDeployment: false, stoppedDeployment: true, deploymentInAlarm: false }} | ${['DEPLOYMENT_STOP_ON_REQUEST']}
    ${{ failedDeployment: false, stoppedDeployment: false, deploymentInAlarm: true }} | ${['DEPLOYMENT_STOP_ON_ALARM']}
  `(
    'should enable auto rollback based on the provided configuration',
    ({ config, expectedEvents }) => {
      const app = new App();
      // WHEN
      const stack = new TestStack(app, 'TestStack', undefined, {
        autoRollback: config,
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
              '"autoRollbackConfiguration":{"enabled":true,"events":\\["' +
                expectedEvents.join('","') +
                '"\\]}',
            ),
          ],
        ]),
      };
      assert.hasResourceProperties('Custom::ServerBlueGreenDeploymentGroup', {
        Create: assertProperties,
        Update: assertProperties,
      });
    },
  );

  it('should enable TerminationHook if provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      terminationHook: true,
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
          Match.stringLikeRegexp('"terminationHookEnabled":true,'),
        ],
      ]),
    };
    assert.hasResourceProperties('Custom::ServerBlueGreenDeploymentGroup', {
      Create: assertProperties,
      Update: assertProperties,
    });
  });
});
