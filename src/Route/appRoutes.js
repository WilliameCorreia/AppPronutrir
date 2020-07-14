import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home/home';
import Cadastro from '../Pages/Cadastro/cadastro'

const AppStack = createStackNavigator();

export default function appRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name={"Home"}
                component={Home}
            />
        </AppStack.Navigator>
        
    )
}

const styles = StyleSheet.create({})
