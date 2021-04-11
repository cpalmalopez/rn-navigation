import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
//import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation}: Props) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                width <= height ? 
                <Button
                    title="Menú"
                    onPress={() => navigation.toggleDrawer()}
                />
                : null
            )
        })
    }, []);

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
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'María'
                    })}
                    style={{...styles.botonGrande, backgroundColor: 'purple'}}
                >
                    <Text style={styles.botonGrandeTexto}>María</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
