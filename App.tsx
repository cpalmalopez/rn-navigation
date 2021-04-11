import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

export const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			<MenuLateral />
		</NavigationContainer>
	)
}
