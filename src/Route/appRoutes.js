import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home/home';
import HeaderApp from '../Components/HeaderApp';
import DrawerOpen from '../Components/DrawerOpen';
import { DrawerActions } from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function appRoutes() {
    return (
        <AppStack.Navigator
            initialRouteName={'Home'}
            headerMode={'screen'}
            screenOptions={{
                header:({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined
                        ? options.title : scene.route.name;
                    const backColor = options.headerStyle.backgroundColor

                    let _rightButton = scene.route.name;

                    return(
                        <HeaderApp
                            title={title}
                            color={backColor}
                            leftButton={<DrawerOpen onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />}
                        />
                    )
                }
            }}
        >
            <AppStack.Screen
                name={"Home"}
                component={Home}
                options={{
                    title: "Pronutrir", 
                    headerStyle: { backgroundColor: '#00a1a3' }
                }}
            />
        </AppStack.Navigator>

    )
}

const styles = StyleSheet.create({})
