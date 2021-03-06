import createAsyncActionsTypes from "./utils/create_async_actions_types";
import createSyncActionsTypes from "./utils/create_sync_actions_types";

const AsyncTypes = createAsyncActionsTypes([
  "AUTHENTICATE"
]);

const SyncTypes = createSyncActionsTypes([
  "INFOCHANGE"
]);


export default {...AsyncTypes, ...SyncTypes};
