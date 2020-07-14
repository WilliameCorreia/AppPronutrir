import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import appRoute from '../Route/appRoutes';
import DrawerContent from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();


export default function DrawerRoute() {
    return (
        <Drawer.Navigator
            drawerContent={({navigation}) => <DrawerContent navigation={navigation}/>}
        >
            <Drawer.Screen
                name="Home"
                component={appRoute}
            />
        </Drawer.Navigator>
    )
}

