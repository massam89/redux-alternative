import React from "react";
import { useStore } from "../store";
import { Login } from "../store/actions/authActions";

const Test = () => {
  const { state, dispatch } = useStore();

  const loginHandler = () => {
    dispatch(Login());
  };

  console.log('Test')

  return (
    <button onClick={loginHandler}>
      {state.auth.isLogin ? "Logout" : "LogIn"}
    </button>
  );
};

export default Test;
