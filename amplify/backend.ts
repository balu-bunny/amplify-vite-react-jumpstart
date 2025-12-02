import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import * as functions from './functions';

// Pass the `functions` module directly to defineBackend. This matches
// Amplify Gen2 expectations where the `functions` module exports resource factories.
defineBackend({
  auth,
  functions,
});
