import {
  App,
  Stack,
  aws_elasticloadbalancingv2 as elbv2,
  aws_ec2 as ec2,
  aws_codedeploy as codedeploy,
} from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';

import { TestStack } from './testStack';

describe('EC2/On-premise Server Blue Green Deployment Group deployment options', () => {
  it('should create an EC2/On-premise Server Blue Green Deployment Group with traffic control deployment option when loadBalancers are provided', () => {
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
          Match.stringLikeRegexp(
            '{"deploymentOption":"WITH_TRAFFIC_CONTROL","deploymentType":"BLUE_GREEN"}',
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

  it('should create an EC2/On-premise Server Blue Green Deployment Group with no traffic control deployment option when loadBalancers are not provided', () => {
    const app = new App();
    // WHEN
    const stack = new TestStack(app, 'TestStack', undefined, {
      loadBalancers: [],
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
          Match.stringLikeRegexp(
            '{"deploymentOption":"WITHOUT_TRAFFIC_CONTROL","deploymentType":"BLUE_GREEN"}',
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

  it('should create an EC2/On-premise Server Blue Green Deployment Group with traffic control deployment option when loadBalancer provided', () => {
    const app = new App();
    // WHEN
    const anotherStack = new Stack(app, 'AnotherStack');
    const loadBalancer = new elbv2.ApplicationLoadBalancer(
      anotherStack,
      'ALB',
      {
        vpc: new ec2.Vpc(anotherStack, 'VPC'),
        internetFacing: true,
      },
    );
    const targetGroup = new elbv2.ApplicationTargetGroup(
      anotherStack,
      'TargetGroup',
      {
        vpc: loadBalancer.vpc!,
        port: 80,
        targets: [],
        protocol: elbv2.ApplicationProtocol.HTTP,
      },
    );
    const stack = new TestStack(app, 'TestStack', undefined, {
      loadBalancers: undefined,
      loadBalancer: codedeploy.LoadBalancer.application(targetGroup),
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
            '{"deploymentOption":"WITH_TRAFFIC_CONTROL","deploymentType":"BLUE_GREEN"}',
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

  it('should create an EC2/On-premise Server Blue Green Deployment Group with traffic control deployment option when loadBalancer provided (and loadBalancers is empty array)', () => {
    const app = new App();
    // WHEN
    const anotherStack = new Stack(app, 'AnotherStack');
    const loadBalancer = new elbv2.ApplicationLoadBalancer(
      anotherStack,
      'ALB',
      {
        vpc: new ec2.Vpc(anotherStack, 'VPC'),
        internetFacing: true,
      },
    );
    const targetGroup = new elbv2.ApplicationTargetGroup(
      anotherStack,
      'TargetGroup',
      {
        vpc: loadBalancer.vpc!,
        port: 80,
        targets: [],
        protocol: elbv2.ApplicationProtocol.HTTP,
      },
    );
    const stack = new TestStack(app, 'TestStack', undefined, {
      loadBalancers: [],
      loadBalancer: codedeploy.LoadBalancer.application(targetGroup),
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
            '{"deploymentOption":"WITH_TRAFFIC_CONTROL","deploymentType":"BLUE_GREEN"}',
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
