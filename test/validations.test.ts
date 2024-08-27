import { App } from 'aws-cdk-lib';

import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group validations', () => {
  it('should throw an error if GreenFleetProvisionOption set to COPY_AUTO_SCALING_GROUP and no autoscaling groups provided', () => {
    const app = new App();
    // THEN
    expect(() => {
      new TestStack(app, 'TestStack', undefined, {
        greenFleetProvisionOption: 'COPY_AUTO_SCALING_GROUP',
        autoScalingGroups: undefined,
      });
    }).toThrow(
      'When using COPY_AUTO_SCALING_GROUP, you must provide at one auto scaling group',
    );
  });

  it('should throw an error if OriginalInstancePolicy is set to TERMINATE and TerminateOriginalInstancesTimeout is not provided', () => {
    const app = new App();
    // THEN
    expect(() => {
      new TestStack(app, 'TestStack', undefined, {
        originalInstancePolicy: 'TERMINATE',
        terminateOriginalInstancesTimeout: undefined,
      });
    }).toThrow(
      'When using TERMINATE original instances policy, you must provide a terminate original instances timeout',
    );
  });

  it('should throw an error if TrafficRoutingConfig is set to MANUALLY and ManualTrafficRoutingTimeouts is not provided', () => {
    const app = new App();
    // THEN
    expect(() => {
      new TestStack(app, 'TestStack', undefined, {
        trafficRoutingConfig: 'MANUALLY',
        manualTrafficRoutingTimeout: undefined,
      });
    }).toThrow(
      'When using MANUALLY traffic routing, you must provide a manual traffic routing timeout',
    );
  });
});
