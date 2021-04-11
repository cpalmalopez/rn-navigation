import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',        // este tiene más peso que el del Stack
            headerBackTitle: 'Atrás',   // cambiar texto atrás en iphone || '' texto por defecto del idioma del dispositivo 

        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={ styles.title }>
                Screen 2
            </Text>
            <Button
                title='Ir página 3'
                onPress={ () => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
