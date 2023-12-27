import { authActions } from "../actions/authActions";


const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return { ...state, isLogin: !state.isLogin };
    default:
      return { ...state };
  }
};
export default authReducer;