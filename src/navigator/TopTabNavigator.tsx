import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumnsScreen } from '../screens/AlbumnsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop: top }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                pressColor: colores.primary, // solo para android
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colores.primary
                },
                style: {
                    borderTopColor: colores.primary,
                    shadowColor: "transparent",
                    elevation: 0
                },
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName='CH'
                            break;
                        case 'ContactsScreen':
                            iconName='CO'
                            break;
                        case 'AlbumnsScreen':
                            iconName='AL'
                            break;
                    }
                    return <Text style={{color}}>{iconName}</Text>
                }
            })}
        >
            <Tab.Screen name="ChatScreen" options={{ title: "Chat" }}component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" options={{ title: "Contacts" }}component={ContactsScreen} />
            <Tab.Screen name="AlbumnsScreen" options={{ title: "Albumns" }}component={AlbumnsScreen} />
        </Tab.Navigator>
    );
}