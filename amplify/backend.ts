import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { getdetailsFunction } from './functions/getdetails/resource';

defineBackend({
  auth,
  functions: {
    getdetailsFunction,
  },
});
