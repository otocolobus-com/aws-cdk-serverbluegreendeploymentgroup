import {
  ArnFormat,
  Duration,
  PhysicalName,
  Resource,
  Stack,
} from 'aws-cdk-lib';
import { IAutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as custom from 'aws-cdk-lib/custom-resources';

export interface ServerBlueGreenDeploymentGroupProps
  extends codedeploy.ServerDeploymentGroupProps {
  /**
   * How to provision the green fleet.
   */
  readonly greenFleetProvisionOption?:
  | 'COPY_AUTO_SCALING_GROUP'
  | 'DISCOVER_EXISTING';

  /**
   * How to reroute traffic to the green fleet.
   */
  readonly trafficRoutingConfig?: 'AUTOMATICALLY' | 'MANUALLY';

  /**
   * How long to wait for the manual traffic rerouting to complete.
   */
  readonly manualTrafficRoutingTimeout?: Duration;

  /**
   * The action to take on instances in the original environment after a successful blue/green deployment.
   */
  readonly originalInstancePolicy?: 'TERMINATE' | 'KEEP_ALIVE';

  /**
   * How long to wait before terminating the original instances.
   *
   * @default - if `originalInstancePolicy` is `TERMINATE`, this is required and the default value is 5 minutes.
   * - otherwise, this is ignored.
   */
  readonly terminateOriginalInstancesTimeout?: Duration;
}

export class ServerBlueGreenDeploymentGroup
  extends Resource
  implements codedeploy.IServerDeploymentGroup {
  readonly application: codedeploy.IServerApplication;
  readonly role?: iam.IRole | undefined;
  readonly deploymentGroupName: string;
  readonly deploymentGroupArn: string;
  readonly deploymentConfig: codedeploy.IServerDeploymentConfig;
  readonly autoScalingGroups?: IAutoScalingGroup[] | undefined;

  constructor(
    scope: Stack,
    id: string,
    props: ServerBlueGreenDeploymentGroupProps,
  ) {
    super(scope, id);

    validateProps(props);

    const role =
      props.role ??
      new iam.Role(this, 'Role', {
        assumedBy: new iam.ServicePrincipal('codedeploy.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSCodeDeployRole',
          ),
        ],
      });

    const application =
      props.application ??
      new codedeploy.ServerApplication(this, 'Application', {
        applicationName: PhysicalName.GENERATE_IF_NEEDED,
      });

    const deploymentGroupName = props.deploymentGroupName ?? this.physicalName;

    const deploymentConfig =
      props.deploymentConfig ?? codedeploy.ServerDeploymentConfig.ONE_AT_A_TIME;

    const customResourceFnRole = new iam.Role(this, 'customResourceFnRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        CodeDeploy: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: [
                'codedeploy:CreateDeploymentGroup',
                'codedeploy:DeleteDeploymentGroup',
                'codedeploy:UpdateDeploymentGroup',
              ],
              resources: ['*'],
            }),
          ],
        }),
      },
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    role.grantPassRole(customResourceFnRole);

    const loadBalancers = props.loadBalancers?.length
      ? props.loadBalancers
      : props.loadBalancer
        ? [props.loadBalancer]
        : undefined;

    const trafficRoutingConfig = props.trafficRoutingConfig ?? 'AUTOMATICALLY';

    const parameters = {
      applicationName: application.applicationName,
      serviceRoleArn: role.roleArn,
      loadBalancerInfo: {
        elbInfoList:
          loadBalancers
            ?.filter(
              (loadBalancer) =>
                loadBalancer.generation ===
                codedeploy.LoadBalancerGeneration.FIRST,
            )
            .map((loadBalancer) => ({ name: loadBalancer.name })) ?? [],
        targetGroupInfoList:
          loadBalancers
            ?.filter(
              (loadBalancer) =>
                loadBalancer.generation ===
                codedeploy.LoadBalancerGeneration.SECOND,
            )
            .map((loadBalancer) => ({ name: loadBalancer.name })) ?? [],
      },
      deploymentStyle: {
        deploymentOption: loadBalancers?.length
          ? 'WITH_TRAFFIC_CONTROL'
          : 'WITHOUT_TRAFFIC_CONTROL',
        deploymentType: 'BLUE_GREEN',
      },
      blueGreenDeploymentConfiguration: {
        deploymentReadyOption: {
          actionOnTimeout:
            trafficRoutingConfig === 'AUTOMATICALLY'
              ? 'CONTINUE_DEPLOYMENT'
              : 'STOP_DEPLOYMENT',
          waitTimeInMinutes: props.manualTrafficRoutingTimeout
            ? props.manualTrafficRoutingTimeout.toMinutes()
            : undefined,
        },
        greenFleetProvisioningOption: {
          action: props.greenFleetProvisionOption ?? 'COPY_AUTO_SCALING_GROUP',
        },
        terminateBlueInstancesOnDeploymentSuccess: {
          action: props.originalInstancePolicy ?? 'TERMINATE',
          terminationWaitTimeInMinutes: props.terminateOriginalInstancesTimeout
            ? props.terminateOriginalInstancesTimeout.toMinutes()
            : undefined,
        },
      },
      autoScalingGroups: props.autoScalingGroups?.map(
        (autoScalingGroup) => autoScalingGroup.autoScalingGroupName,
      ),
      terminationHookEnabled: props.terminationHook ?? false,
      autoRollbackConfiguration: {
        enabled:
          (props.autoRollback?.deploymentInAlarm ||
            props.autoRollback?.failedDeployment ||
            props.autoRollback?.stoppedDeployment) ??
          false,
        events: [
          ...(props.autoRollback?.stoppedDeployment
            ? ['DEPLOYMENT_STOP_ON_REQUEST']
            : []),
          ...(props.autoRollback?.deploymentInAlarm
            ? ['DEPLOYMENT_STOP_ON_ALARM']
            : []),
          ...(props.autoRollback?.failedDeployment
            ? ['DEPLOYMENT_FAILURE']
            : []),
        ],
      },
    };
    new custom.AwsCustomResource(this, 'Resource', {
      resourceType: 'Custom::ServerBlueGreenDeploymentGroup',
      onCreate: {
        service: 'CodeDeploy',
        action: 'CreateDeploymentGroup',
        parameters: {
          deploymentGroupName: deploymentGroupName,
          ...parameters,
        },
        physicalResourceId:
          custom.PhysicalResourceId.fromResponse('deploymentGroupId'),
      },
      onDelete: {
        service: 'CodeDeploy',
        action: 'DeleteDeploymentGroup',
        parameters: {
          applicationName: application.applicationName,
          deploymentGroupName: deploymentGroupName,
        },
      },
      onUpdate: {
        service: 'CodeDeploy',
        action: 'UpdateDeploymentGroup',
        parameters: {
          currentDeploymentGroupName: deploymentGroupName,
          newDeploymentGroupName: deploymentGroupName,
          ...parameters,
        },
      },
      role: customResourceFnRole,
    });

    this.application = application;
    this.role = this.role;
    this.deploymentGroupName = deploymentGroupName;
    this.deploymentGroupArn = scope.formatArn({
      service: 'codedeploy',
      resource: 'deploymentgroup',
      resourceName: `${application.applicationName}/${deploymentGroupName}`,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });
    this.deploymentConfig = deploymentConfig;
    this.autoScalingGroups = props.autoScalingGroups;
  }
}

function validateProps(props: ServerBlueGreenDeploymentGroupProps) {
  if (
    props.greenFleetProvisionOption === 'COPY_AUTO_SCALING_GROUP' &&
    (!props.autoScalingGroups || props.autoScalingGroups.length !== 1)
  ) {
    throw new Error(
      'When using COPY_AUTO_SCALING_GROUP, you must provide at one auto scaling group',
    );
  }

  if (
    props.trafficRoutingConfig === 'MANUALLY' &&
    !props.manualTrafficRoutingTimeout
  ) {
    throw new Error(
      'When using MANUALLY traffic routing, you must provide a manual traffic routing timeout',
    );
  }

  if (
    (props.originalInstancePolicy ?? 'TERMINATE') === 'TERMINATE' &&
    !props.terminateOriginalInstancesTimeout
  ) {
    throw new Error(
      'When using TERMINATE original instances policy, you must provide a terminate original instances timeout',
    );
  }
}
