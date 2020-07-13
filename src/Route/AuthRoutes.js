import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import login from '../Pages/Login/login'
import Cadastro from '../Pages/Cadastro/cadastro'
import Inicial from '../Pages/Inicial/inicial'

const StackNavigator = createStackNavigator();

const AuthRoutes = () => {
    return (
        <StackNavigator.Navigator
            initialRouteName={"Inicial"}
        >
          <StackNavigator.Screen
            name="Login"
            component={login}
          />
          <StackNavigator.Screen
            name={"Cadastro"}
            component={Cadastro}
          />
          <StackNavigator.Screen
            name={"Inicial"}
            component={Inicial}
          />
        </StackNavigator.Navigator>
    )
}

export default AuthRoutes
