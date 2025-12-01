import { defineFunction } from '@aws-amplify/backend';

/**
 * Define the getdetails Python Lambda function resource.
 * After editing, run `amplify push` to provision the function in AWS.
 */
export const getdetailsFunction = defineFunction({
  name: 'getdetailsFunction',
  runtime: 'python3.9',
  handler: 'index.handler',
  srcRoot: './src',
});
