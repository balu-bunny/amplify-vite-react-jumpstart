import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { getdetails } from './functions/getdetails/resource';

defineBackend({
  auth,
  // cast to any: the generated backend typing may not include custom function keys yet
  functions: ({
    getdetails,
  } as any),
} as any);
