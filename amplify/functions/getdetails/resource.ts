import { defineFunction, PythonVersion } from '@aws-amplify/backend';

/**
 * Define the getdetails Python Lambda function resource.
 * After editing, run `amplify push` to provision the function in AWS.
 */
export const getdetails = defineFunction({
  name: 'getdetailsFunction',
  runtime: PythonVersion.PYTHON_3_9,
  handler: 'index.handler',
  srcRoot: './src',
});
