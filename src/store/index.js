import React, { useContext, useReducer } from "react";
import reducerFunction from "./reducers";

const Context = React.createContext();

const StoreProvider = ({ value, children }) => {
  const [state, dispatch] = useReducer(
    reducerFunction,
    value,
    (initialState) => initialState
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useStore = () => useContext(Context);

export default StoreProvider;
