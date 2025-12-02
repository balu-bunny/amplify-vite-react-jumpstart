import { defineFunction } from '@aws-amplify/backend';

/**
 * Define the getdetails Python Lambda function resource.
 * After editing, run `amplify push` to provision the function in AWS.
 */
export const getdetails = defineFunction({
  name: 'getdetailsFunction',
  entry: './src/index.py',
});
