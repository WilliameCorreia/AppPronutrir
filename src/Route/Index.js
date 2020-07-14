import React, { useContext } from 'react';

import AuthRoute from '../Route/AuthRoutes';
import Drawer from '../Route/DrawerRoute';
import AuthContext from '../Contexts/Auth';
import Inicial from '../Pages/Inicial/inicial';


const Index = () => {
    
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <Inicial/>
        )
    }

    return (

        signed ? <Drawer/> : <AuthRoute />
        
    )
}

export default Index
