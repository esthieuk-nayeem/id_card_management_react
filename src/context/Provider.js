import { createContext, useReducer } from "react";
import auth from "./reducers/auth";
import employee from "./reducers/employee";
import authinitialState from "./initialstates/authInitialStates";
import employeeInitialStates from "./initialstates/employeeInitialStates";



export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(auth, authinitialState);
    const [employeeState, employeeDispatch] = useReducer(
        employee, employeeInitialStates
        );

    return <GlobalContext.Provider
        value = {
            {
            authState,
            authDispatch,
            employeeState,
            employeeDispatch,
        }}>
            {children}
    </GlobalContext.Provider>
    

    }