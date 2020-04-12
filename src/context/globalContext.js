import React, { createContext, useReducer, useContext } from "react";

import { DUMMY_PRODUCTS as products } from "./actions-types";
import { GlobalReducer } from "./reducers";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

GlobalStateContext.displayName = 'GlobalStateContext';
GlobalDispatchContext.displayName = 'GlobalDispatchContext';

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, { products });
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export const useGlobalStateContext = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error("You cannot use useGlobalState outside GlobalContextProvider");
      }
    return context;
}

export const useGlobalDispatchContext = () => {
    const context = useContext(GlobalDispatchContext);
    if (context === undefined) {
        throw new Error("You cannot use useGlobalDispatch outside GlobalContextProvider");
      }
    return context;
}