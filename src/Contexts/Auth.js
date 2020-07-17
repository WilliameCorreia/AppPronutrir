import React, { createContext, useState, useEffect } from "react";

import auth from '@react-native-firebase/auth';
import api from "../Services/api";

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({ email: '', token: '' });
    const [ loading, setLoading ] = useState(true);

    async function signIn(user) {
        setTimeout(() =>{
            if(user){
                getUsuario(user)
                const { email, uid } = user;
                setUsuario({ email, uid })
                
            }else{
                setLoading(false);
                setUsuario({ email: null })
            }
        },2000)
    }

    async function getUsuario(user){
        const { email, uid } = user;
        api.get(`Usuario/${uid}`).then(response =>{
            setLoading(false);
        })
    }

    useEffect(() => {
        const subscribe = auth().onUserChanged(signIn);
        return () => {
            subscribe;
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
