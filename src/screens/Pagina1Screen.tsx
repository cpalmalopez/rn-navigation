import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
//import { StackScreenProps } from '@react-navigation/stack'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation}: Props) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                width < height ? 
                <TouchableOpacity
                    style={{ marginLeft: 15}}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={35} color={colores.primary} />
                </TouchableOpacity>
                : null
            )
        })
    }, [width]);

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                Screen 1
            </Text>
            <Button
                onPress={() => navigation.navigate('Pagina2Screen')}
                title='Ir página 2'
            />
            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                    style={{...styles.botonGrande, backgroundColor: 'green'}}
                >
                    <Icon name="body-outline" size={35} color='white' />
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'María'
                    })}
                    style={{...styles.botonGrande, backgroundColor: 'purple'}}
                >
                    <Icon name="woman-outline" size={35} color='white' />
                    <Text style={styles.botonGrandeTexto}>María</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
