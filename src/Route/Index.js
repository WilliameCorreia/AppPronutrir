import React, { useContext } from 'react';

import AppRoute from '../Route/appRoutes';
import AuthRoute from '../Route/AuthRoutes';
import AuthContext from '../Contexts/Auth';
import Inicial from '../Pages/Inicial/inicial'


const Index = () => {
    
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <Inicial/>
        )
    }

    return (

        signed ? <AppRoute/> : <AuthRoute />
        
    )
}

export default Index
