import authReducer from "./authReducer";
import uiReducer from "./uiReducer";

const reducerFunction = (state, action) => ({
  ui: uiReducer(state.ui, action),
  auth: authReducer(state.auth, action)
});

export default reducerFunction;
