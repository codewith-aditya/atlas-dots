import { waitForModelOAuthCompletion } from "@atlas-dots/core";
import type { RpcClient } from "./rpc";
import { rpc } from "./rpc";

export type { ModelCatalogEntry, ModelCredential, ModelOAuthBegin } from "@atlas-dots/contracts";
export { cancelModelOAuthAttempt, finishModelOAuthAttempt } from "@atlas-dots/core";

/** `client` must be the one that began the sign-in: the login belongs to its space. */
export async function waitForModelOAuth(
  loginId: string,
  signal?: AbortSignal,
  client: RpcClient = rpc,
) {
  return waitForModelOAuthCompletion(() => client.models.completeOAuth({ loginId }, { signal }), {
    signal,
  });
}
