# EC2/Server Blue/Green Deployment Group construct

This construct creates a CodeDeploy Deployment Group for an EC2/On-Premises Deployment Group using the Blue/Green Deployment configuration.

**WARNING**: At the moment, this construct only supports the EC2 deployments with Auto Scaling Groups. The construct does not support neither the EC2 tag-based deployments nor the On-Premises tag-based deployments.

## Overview

Blue/Green deployments is popular deployment strategy that allows you to deploy your application to a new set of instances while keeping the old set of instances running. This allows you to switch traffic from the old set of instances to the new set of instances in a controlled manner.

This construct creates a CodeDeploy Deployment Group for an EC2 using the Blue/Green deployment configuration. The Deployment Group is associated with an Auto Scaling Group and a Load Balancer Target Group.

When a deployment is triggered, the Deployment Group will create a new Auto Scaling Group with the same configuration as the original Auto Scaling Group. The new Auto Scaling Group is called the Green Fleet. The Deployment Group will deploy the new revision of the application to the Green Fleet.
After the deployment is successful, the Deployment Group will switch the traffic from the original Auto Scaling Group (Blue Fleet) to the Green Fleet. The Deployment Group will then terminate the instances in the original Auto Scaling Group (if configured to do so).
The Deployment Group will wait for the original instances to be terminated before marking the deployment as successful.

You can configure the deployment to automatically rollback if the deployment fails, if the deployment is stopped, or if the deployment is in alarm.

## Installation

```bash
npm install ec2serverbluegreendeploymentgroup
```

## Usage

```ts
import { ServerBlueGreenDeploymentGroup } from "ec2serverbluegreendeploymentgroup";

class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // ... other resources for LoadBalancer, AutoScalingGroup, etc.

    const application = new codedeploy.ServerApplication(this, "Application", {
      applicationName: "MyApplication",
    });

    // role required by CodeDeploy to do Blue/Green deployments with EC2 Auto Scaling Groups
    const role = new iam.Role(this, "Role", {
      assumedBy: new iam.ServicePrincipal("codedeploy.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSCodeDeployRole"),
      ],
      inlinePolicies: {
        ASGWithLaunchTemplate: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: [
                "ec2:CreateTags",
                "ec2:RunInstances",
                "iam:PassRole",
                "ssm:GetParameters",
              ],
              resources: ["*"],
            }),
          ],
        }),
      },
    });

    const deploymentGroup = new ServerBlueGreenDeploymentGroup(
      this,
      "DeploymentGroup",
      {
        application,
        deploymentGroupName: "DeploymentGroup",
        role,
        loadBalancers: [
          codedeploy.LoadBalancer.application(loadBalancerTargetGroup),
        ],
        autoScalingGroups,
        // ... other optional properties
      },
    );

    // ... other resources for CodeDeploy and CodePipeline
    // where buildOutput is the output of the CodeBuild action

    pipeline.addStage({
      stageName: "Deploy",
      actions: [
        new codepipeline_actions.CodeDeployServerDeployAction({
          actionName: "Deploy",
          input: buildOutput,
          deploymentGroup,
        });
      ],
    });
  }
}
```

## Limitations

Currently, it is not possible to update the Deployment Group name after the deployment group is created.
Currently, it is not possible to create a Deployment Group for an EC2 or On-Premises deployment with the tag-based configuration.

## Author

[Władysław Czyżewski](https://github.com/wladyslawczyzewski) (https://otocolobus.com)
