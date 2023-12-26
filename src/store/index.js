import React, { useContext, useReducer } from "react";
import reducerFunction from "./reducers";
import { initialState } from "./initialState";

const Context = React.createContext();

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useStore = () => useContext(Context);
export default StoreProvider;
