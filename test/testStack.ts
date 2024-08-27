import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as alb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

import {
  ServerBlueGreenDeploymentGroup,
  ServerBlueGreenDeploymentGroupProps,
} from '../src';

export class TestStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: StackProps,
    overrides?: Partial<ServerBlueGreenDeploymentGroupProps>,
  ) {
    super(scope, id, props);

    const lb = new alb.ApplicationLoadBalancer(this, 'ALB', {
      vpc: new ec2.Vpc(this, 'VPC'),
      internetFacing: true,
    });

    const asg = new autoscaling.AutoScalingGroup(this, 'ASG', {
      vpc: lb.vpc!,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T4G,
        ec2.InstanceSize.NANO,
      ),
      machineImage: ec2.MachineImage.latestAmazonLinux2023(),
    });

    const targetGroup = new alb.ApplicationTargetGroup(this, 'TargetGroup', {
      vpc: lb.vpc!,
      port: 80,
      targets: [asg],
      protocol: alb.ApplicationProtocol.HTTP,
    });

    const application = new codedeploy.ServerApplication(
      this,
      'EC2ServerApplication',
    );

    const role = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('codedeploy.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSCodeDeployRole',
        ),
      ],
    });

    new ServerBlueGreenDeploymentGroup(this, 'EC2ServerDeploymentGroup', {
      application,
      deploymentGroupName: 'EC2ServerDeploymentGroup',
      role,
      loadBalancers: [codedeploy.LoadBalancer.application(targetGroup)],
      deploymentConfig: codedeploy.ServerDeploymentConfig.ALL_AT_ONCE,
      autoScalingGroups: [asg],
      greenFleetProvisionOption: 'COPY_AUTO_SCALING_GROUP',
      trafficRoutingConfig: 'AUTOMATICALLY',
      originalInstancePolicy: 'TERMINATE',
      terminateOriginalInstancesTimeout: Duration.minutes(5),
      autoRollback: {
        failedDeployment: true,
        stoppedDeployment: true,
        deploymentInAlarm: true,
      },
      ...overrides,
    });
  }
}
