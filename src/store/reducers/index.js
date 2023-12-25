import uiReducer from "./uiReducer";

const reducerFunction = (state, action) => ({
  ui: uiReducer(state.ui, action),
});

export default reducerFunction;
