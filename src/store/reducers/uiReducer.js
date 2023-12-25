import { uiActions } from "../actions/uiActions";

const uiReducer = (state, action) => {
  switch (action.type) {
    case uiActions.TOGGLE_THEME:
      return { ...state, isDark: !state.isDark };
    default:
      return { ...state };
  }
};
export default uiReducer;
