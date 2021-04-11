import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
// > yarn add -D @types/react-native-vector-icons
import { colores, styles } from '../theme/appTheme'

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab screen 1')
    }, [])

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 10 }}>
            <Text style={styles.title}>tab 1 screen</Text>
            <Text>
                <Icon name="airplane-outline" size={50} color={colores.primary} />
                <Icon name="add-outline" size={50} color={colores.primary} />
                <Icon name="add-circle-outline" size={50} color={colores.primary} />
                <Icon name="alert-outline" size={50} color={colores.primary} />
                <Icon name="arrow-back-outline" size={50} color={colores.primary} />
                <Icon name="baseball-outline" size={50} color={colores.primary} />
                <Icon name="bed-outline" size={50} color={colores.primary} />
                <Icon name="bookmark-outline" size={50} color={colores.primary} />
                <Icon name="bulb-outline" size={50} color={colores.primary} />
            </Text>
        </View>
    )
}
