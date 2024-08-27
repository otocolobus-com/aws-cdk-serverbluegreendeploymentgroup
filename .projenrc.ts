import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'ec2serverbluegreendeploymentgroup',
  author: 'OtoColobus Sp. z o.o.',
  authorAddress: 'start@otocolobus.com',
  cdkVersion: '2.154.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  minNodeVersion: '20.0.0',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/otocolobus-com/ec2serverbluegreendeploymentgroup.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
