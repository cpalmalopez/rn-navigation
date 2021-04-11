import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
//import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons'

//import { createStackNavigator } from '@react-navigation/stack';

// export type RootStackParams = {
//     StackNavigator: undefined,
//     SettingsScreen: undefined,
//     Tabs: undefined
// };

const Drawer = createDrawerNavigator/*<RootStackParams>*/();

// Ejemplo para resolver el Stack de Settings
// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="SettingsScreen"
//                 component={SettingsScreen}
//             />
//         </Stack.Navigator>
//     )
// }

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerPosition='left'
            drawerType={ width > height ? 'permanent' : 'front'}
            // Contenido del Nav
            drawerContent={props => <MenuInterno {...props} />}
        >
            {/* Definición de Screens */}
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

// Contenido del Nav
const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del Avatar */}
            <View style={ styles.avatarContainer }>
                <Image
                    source={{
                        uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
                    }}
                    style={ styles.avatar }
                />
            </View>
            {/* Menu Options */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity 
                    style={{...styles.menuBoton, flexDirection: 'row'}}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon name="bulb-outline" size={20} color={colores.primary} />
                    <Text style={styles.menuItem}> Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{...styles.menuBoton, flexDirection: 'row'}}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="book-outline" size={20} color={colores.primary} />
                    <Text style={styles.menuItem}> Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}