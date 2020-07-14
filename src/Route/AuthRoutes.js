import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import login from '../Pages/Login/login'
import Cadastro from '../Pages/Cadastro/cadastro'
import Inicial from '../Pages/Inicial/inicial'
import MyHeader from '../Components/MyHeader'
import MyBackButton from '../Components/MyBackButton'

const StackNavigator = createStackNavigator();

const AuthRoutes = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={"Inicial"}
      headerMode={'screen'}
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
          const backColor = options.headerStyle
          return (
            <MyHeader
              title={title}
              color={"#00a1a3"}
              leftButton={<MyBackButton onPress={() => navigation.goBack()} />}
            />
          )
        }
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={login}
        options={{title: 'Login'}}
      />
      <StackNavigator.Screen
        name={"Cadastro"}
        component={Cadastro}
        options={{title: 'Cadastro'}}
      />
    </StackNavigator.Navigator>
  )
}

export default AuthRoutes
