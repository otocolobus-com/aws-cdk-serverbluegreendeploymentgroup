# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerBlueGreenDeploymentGroup <a name="ServerBlueGreenDeploymentGroup" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup"></a>

- *Implements:* aws-cdk-lib.aws_codedeploy.IServerDeploymentGroup

#### Initializers <a name="Initializers" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer"></a>

```typescript
import { ServerBlueGreenDeploymentGroup } from '@otocolobus/aws-cdk-serverbluegreendeploymentgroup'

new ServerBlueGreenDeploymentGroup(scope: Stack, id: string, props: ServerBlueGreenDeploymentGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.props">props</a></code> | <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps">ServerBlueGreenDeploymentGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `id`<sup>Required</sup> <a name="id" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps">ServerBlueGreenDeploymentGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isConstruct"></a>

```typescript
import { ServerBlueGreenDeploymentGroup } from '@otocolobus/aws-cdk-serverbluegreendeploymentgroup'

ServerBlueGreenDeploymentGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isOwnedResource"></a>

```typescript
import { ServerBlueGreenDeploymentGroup } from '@otocolobus/aws-cdk-serverbluegreendeploymentgroup'

ServerBlueGreenDeploymentGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isResource"></a>

```typescript
import { ServerBlueGreenDeploymentGroup } from '@otocolobus/aws-cdk-serverbluegreendeploymentgroup'

ServerBlueGreenDeploymentGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.application">application</a></code> | <code>aws-cdk-lib.aws_codedeploy.IServerApplication</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentConfig">deploymentConfig</a></code> | <code>aws-cdk-lib.aws_codedeploy.IServerDeploymentConfig</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentGroupArn">deploymentGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.autoScalingGroups">autoScalingGroups</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]</code> | *No description.* |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `application`<sup>Required</sup> <a name="application" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.application"></a>

```typescript
public readonly application: IServerApplication;
```

- *Type:* aws-cdk-lib.aws_codedeploy.IServerApplication

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: IServerDeploymentConfig;
```

- *Type:* aws-cdk-lib.aws_codedeploy.IServerDeploymentConfig

---

##### `deploymentGroupArn`<sup>Required</sup> <a name="deploymentGroupArn" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentGroupArn"></a>

```typescript
public readonly deploymentGroupArn: string;
```

- *Type:* string

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="autoScalingGroups" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: IAutoScalingGroup[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]

---

##### `role`<sup>Optional</sup> <a name="role" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroup.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---


## Structs <a name="Structs" id="Structs"></a>

### ServerBlueGreenDeploymentGroupProps <a name="ServerBlueGreenDeploymentGroupProps" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps"></a>

#### Initializer <a name="Initializer" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.Initializer"></a>

```typescript
import { ServerBlueGreenDeploymentGroupProps } from '@otocolobus/aws-cdk-serverbluegreendeploymentgroup'

const serverBlueGreenDeploymentGroupProps: ServerBlueGreenDeploymentGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.alarms">alarms</a></code> | <code>aws-cdk-lib.aws_cloudwatch.IAlarm[]</code> | The CloudWatch alarms associated with this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.application">application</a></code> | <code>aws-cdk-lib.aws_codedeploy.IServerApplication</code> | The CodeDeploy EC2/on-premise Application this Deployment Group belongs to. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.autoRollback">autoRollback</a></code> | <code>aws-cdk-lib.aws_codedeploy.AutoRollbackConfig</code> | The auto-rollback configuration for this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.autoScalingGroups">autoScalingGroups</a></code> | <code>aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]</code> | The auto-scaling groups belonging to this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.deploymentConfig">deploymentConfig</a></code> | <code>aws-cdk-lib.aws_codedeploy.IServerDeploymentConfig</code> | The EC2/on-premise Deployment Configuration to use for this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | The physical, human-readable name of the CodeDeploy Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ec2InstanceTags">ec2InstanceTags</a></code> | <code>aws-cdk-lib.aws_codedeploy.InstanceTagSet</code> | All EC2 instances matching the given set of tags when a deployment occurs will be added to this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ignoreAlarmConfiguration">ignoreAlarmConfiguration</a></code> | <code>boolean</code> | Whether to skip the step of checking CloudWatch alarms during the deployment process. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ignorePollAlarmsFailure">ignorePollAlarmsFailure</a></code> | <code>boolean</code> | Whether to continue a deployment even if fetching the alarm status from CloudWatch failed. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.installAgent">installAgent</a></code> | <code>boolean</code> | If you've provided any auto-scaling groups with the `#autoScalingGroups` property, you can set this property to add User Data that installs the CodeDeploy agent on the instances. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.loadBalancer">loadBalancer</a></code> | <code>aws-cdk-lib.aws_codedeploy.LoadBalancer</code> | The load balancer to place in front of this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.loadBalancers">loadBalancers</a></code> | <code>aws-cdk-lib.aws_codedeploy.LoadBalancer[]</code> | CodeDeploy supports the deployment to multiple load balancers. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.onPremiseInstanceTags">onPremiseInstanceTags</a></code> | <code>aws-cdk-lib.aws_codedeploy.InstanceTagSet</code> | All on-premise instances matching the given set of tags when a deployment occurs will be added to this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The service Role of this Deployment Group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.terminationHook">terminationHook</a></code> | <code>boolean</code> | Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.greenFleetProvisionOption">greenFleetProvisionOption</a></code> | <code>string</code> | How to provision the green fleet. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.manualTrafficRoutingTimeout">manualTrafficRoutingTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait for the manual traffic rerouting to complete. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.originalInstancePolicy">originalInstancePolicy</a></code> | <code>string</code> | The action to take on instances in the original environment after a successful blue/green deployment. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.terminateOriginalInstancesTimeout">terminateOriginalInstancesTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | How long to wait before terminating the original instances. |
| <code><a href="#@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code>string</code> | How to reroute traffic to the green fleet. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.alarms"></a>

```typescript
public readonly alarms: IAlarm[];
```

- *Type:* aws-cdk-lib.aws_cloudwatch.IAlarm[]
- *Default:* []

The CloudWatch alarms associated with this Deployment Group.

CodeDeploy will stop (and optionally roll back)
a deployment if during it any of the alarms trigger.

Alarms can also be added after the Deployment Group is created using the `#addAlarm` method.

> [https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-create-alarms.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-create-alarms.html)

---

##### `application`<sup>Optional</sup> <a name="application" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.application"></a>

```typescript
public readonly application: IServerApplication;
```

- *Type:* aws-cdk-lib.aws_codedeploy.IServerApplication
- *Default:* A new Application will be created.

The CodeDeploy EC2/on-premise Application this Deployment Group belongs to.

---

##### `autoRollback`<sup>Optional</sup> <a name="autoRollback" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.autoRollback"></a>

```typescript
public readonly autoRollback: AutoRollbackConfig;
```

- *Type:* aws-cdk-lib.aws_codedeploy.AutoRollbackConfig
- *Default:* default AutoRollbackConfig.

The auto-rollback configuration for this Deployment Group.

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="autoScalingGroups" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.autoScalingGroups"></a>

```typescript
public readonly autoScalingGroups: IAutoScalingGroup[];
```

- *Type:* aws-cdk-lib.aws_autoscaling.IAutoScalingGroup[]
- *Default:* []

The auto-scaling groups belonging to this Deployment Group.

Auto-scaling groups can also be added after the Deployment Group is created
using the `#addAutoScalingGroup` method.

[disable-awslint:ref-via-interface] is needed because we update userdata
for ASGs to install the codedeploy agent.

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: IServerDeploymentConfig;
```

- *Type:* aws-cdk-lib.aws_codedeploy.IServerDeploymentConfig
- *Default:* ServerDeploymentConfig#OneAtATime

The EC2/on-premise Deployment Configuration to use for this Deployment Group.

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="deploymentGroupName" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string
- *Default:* An auto-generated name will be used.

The physical, human-readable name of the CodeDeploy Deployment Group.

---

##### `ec2InstanceTags`<sup>Optional</sup> <a name="ec2InstanceTags" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ec2InstanceTags"></a>

```typescript
public readonly ec2InstanceTags: InstanceTagSet;
```

- *Type:* aws-cdk-lib.aws_codedeploy.InstanceTagSet
- *Default:* No additional EC2 instances will be added to the Deployment Group.

All EC2 instances matching the given set of tags when a deployment occurs will be added to this Deployment Group.

---

##### `ignoreAlarmConfiguration`<sup>Optional</sup> <a name="ignoreAlarmConfiguration" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ignoreAlarmConfiguration"></a>

```typescript
public readonly ignoreAlarmConfiguration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to skip the step of checking CloudWatch alarms during the deployment process.

---

##### `ignorePollAlarmsFailure`<sup>Optional</sup> <a name="ignorePollAlarmsFailure" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.ignorePollAlarmsFailure"></a>

```typescript
public readonly ignorePollAlarmsFailure: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to continue a deployment even if fetching the alarm status from CloudWatch failed.

---

##### `installAgent`<sup>Optional</sup> <a name="installAgent" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.installAgent"></a>

```typescript
public readonly installAgent: boolean;
```

- *Type:* boolean
- *Default:* true

If you've provided any auto-scaling groups with the `#autoScalingGroups` property, you can set this property to add User Data that installs the CodeDeploy agent on the instances.

> [https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install.html)

---

##### ~~`loadBalancer`~~<sup>Optional</sup> <a name="loadBalancer" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.loadBalancer"></a>

- *Deprecated:* - Use `loadBalancers` instead.

```typescript
public readonly loadBalancer: LoadBalancer;
```

- *Type:* aws-cdk-lib.aws_codedeploy.LoadBalancer
- *Default:* Deployment Group will not have a load balancer defined.

The load balancer to place in front of this Deployment Group.

Can be created from either a classic Elastic Load Balancer,
or an Application Load Balancer / Network Load Balancer Target Group.

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: LoadBalancer[];
```

- *Type:* aws-cdk-lib.aws_codedeploy.LoadBalancer[]
- *Default:* Deployment Group will not have load balancers defined.

CodeDeploy supports the deployment to multiple load balancers.

Specify either multiple Classic Load Balancers, or
Application Load Balancers / Network Load Balancers Target Groups.

---

##### `onPremiseInstanceTags`<sup>Optional</sup> <a name="onPremiseInstanceTags" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.onPremiseInstanceTags"></a>

```typescript
public readonly onPremiseInstanceTags: InstanceTagSet;
```

- *Type:* aws-cdk-lib.aws_codedeploy.InstanceTagSet
- *Default:* No additional on-premise instances will be added to the Deployment Group.

All on-premise instances matching the given set of tags when a deployment occurs will be added to this Deployment Group.

---

##### `role`<sup>Optional</sup> <a name="role" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new Role will be created.

The service Role of this Deployment Group.

---

##### `terminationHook`<sup>Optional</sup> <a name="terminationHook" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.terminationHook"></a>

```typescript
public readonly terminationHook: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.

> [https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors)

---

##### `greenFleetProvisionOption`<sup>Optional</sup> <a name="greenFleetProvisionOption" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.greenFleetProvisionOption"></a>

```typescript
public readonly greenFleetProvisionOption: string;
```

- *Type:* string
- *Default:* COPY_AUTO_SCALING_GROUP

How to provision the green fleet.

---

##### `manualTrafficRoutingTimeout`<sup>Optional</sup> <a name="manualTrafficRoutingTimeout" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.manualTrafficRoutingTimeout"></a>

```typescript
public readonly manualTrafficRoutingTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* if `trafficRoutingConfig` is `MANUALLY`, this is required - otherwise, this is ignored.

How long to wait for the manual traffic rerouting to complete.

---

##### `originalInstancePolicy`<sup>Optional</sup> <a name="originalInstancePolicy" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.originalInstancePolicy"></a>

```typescript
public readonly originalInstancePolicy: string;
```

- *Type:* string
- *Default:* TERMINATE

The action to take on instances in the original environment after a successful blue/green deployment.

---

##### `terminateOriginalInstancesTimeout`<sup>Optional</sup> <a name="terminateOriginalInstancesTimeout" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.terminateOriginalInstancesTimeout"></a>

```typescript
public readonly terminateOriginalInstancesTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* if `originalInstancePolicy` is `TERMINATE`, this is required - otherwise, this is ignored.

How long to wait before terminating the original instances.

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@otocolobus/aws-cdk-serverbluegreendeploymentgroup.ServerBlueGreenDeploymentGroupProps.property.trafficRoutingConfig"></a>

```typescript
public readonly trafficRoutingConfig: string;
```

- *Type:* string
- *Default:* AUTOMATICALLY

How to reroute traffic to the green fleet.

---



