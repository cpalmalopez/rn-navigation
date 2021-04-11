import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';

export const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<MenuLateral />
			{/* <Tabs /> */}
		</NavigationContainer>
	)
}
