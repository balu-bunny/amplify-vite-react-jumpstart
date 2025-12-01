import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import * as functions from './functions';

// Pass the `functions` module directly to defineBackend. Casting to `any`
// keeps TypeScript quiet if generated typings differ at dev-time.
defineBackend({
  auth,
  functions: functions as any,
} as any);
