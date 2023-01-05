import React, { useState, createContext } from "react";

export const AppStateContext = createContext();
export const AppStateProvider = (props) => {
    const [user, setUser] = useState({
        username: 'paul',
        token: '1akk871kah',
    });

    return (
        <AppStateContext.Provider value={user}>
            {props.children}
        </AppStateContext.Provider>
    );
};