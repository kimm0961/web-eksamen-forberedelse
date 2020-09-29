import React, { createContext, useState} from 'react';

export const AuthDataContext = createContext();

const AuthDataProvider = props => {

    console.log("authdataprovider her")

    const [loggedIn, setLoggedin] = useState();

    const onLogout = () => {
        console.log("authdatacontext onlogout")
        setLoggedin(false)
    };

    const onLogin = (logindata) => {
        console.log("authdatacontext onlogin", logindata)
        setLoggedin(true)
    };

    return (
        <AuthDataContext.Provider value={{ loggedIn, onLogin, onLogout}}>
        {props.children}
        </AuthDataContext.Provider>
    )
}

export default AuthDataProvider;