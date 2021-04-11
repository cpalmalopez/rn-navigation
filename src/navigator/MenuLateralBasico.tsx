import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

export type RootStackParams = {
    StackNavigator: undefined,
    SettingsScreen: undefined,
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const MenuLateralBasico = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerPosition='left'
            drawerType={ width > height ? 'permanent' : 'front'}
        >
            <Drawer.Screen name="StackNavigator" options={{title: "Home"}} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title: "Opciones"}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}