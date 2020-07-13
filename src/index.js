import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Routes from '../src/Route/Index'

const index = () => {
    return (
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}

export default index
