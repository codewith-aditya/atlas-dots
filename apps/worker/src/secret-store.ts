import type { RealtimeFanout, SecretStore } from "@atlas-dots/adapter-kit";
import { createSecretStore } from "@atlas-dots/adapters";
import { resolveEncryptionKey } from "@atlas-dots/core";

/** Worker composition without starting job hosts or database connections. */
export async function createWorkerSecretStore(
  source: NodeJS.ProcessEnv,
  realtime?: RealtimeFanout,
): Promise<SecretStore> {
  const store = createSecretStore(resolveEncryptionKey(source), source, realtime);
  await store.start();
  return store;
}
