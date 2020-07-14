import React, { createContext, useState, useEffect } from "react";

import auth from '@react-native-firebase/auth';

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({ email: '', token: '' });
    const [ loading, setLoading ] = useState(true);

    async function signIn(user) {
        setTimeout(() =>{
            if(user){
                const { email, uid } = user;
                setUsuario({ email, uid })
                setLoading(false);
            }else{
                setLoading(false);
                setUsuario({ email: null })
            }
        },2000)
    }

    useEffect(() => {
        const subscribe = auth().onUserChanged(signIn);
        return () => {
            subscribe;
        }
    }, [])

    console.log("*************************")
    
    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
