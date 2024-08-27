import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  name: '@otocolobus/aws-cdk-serverbluegreendeploymentgroup',
  license: 'MIT',
  author: 'Otocolobus Sp. z o.o.',
  authorAddress: 'start@otocolobus.com',
  authorOrganization: true,
  majorVersion: 1,
  cdkVersion: '2.154.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  minNodeVersion: '20.0.0',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/otocolobus-com/aws-cdk-serverbluegreendeploymentgroup.git',
  keywords: [
    'aws',
    'cdk',
    'awscdk',
    'aws-cdk',
    'ec2',
    'blue-green',
    'deployment',
  ],
  release: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
});
project.synth();
