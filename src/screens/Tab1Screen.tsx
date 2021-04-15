import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
// > yarn add -D @types/react-native-vector-icons
import { colores, styles } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab screen 1')
    }, [])

    return (
        <View style={{ ...styles.globalMargin, marginTop: top + 10 }}>
            <Text style={styles.title}>tab 1 screen</Text>
            <Text>
                <TouchableIcon iconName="add-outline" />
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="add-circle-outline" />
                <TouchableIcon iconName="alert-outline" />
                <TouchableIcon iconName="arrow-back-outline" />
                <TouchableIcon iconName="baseball-outline" />
                <TouchableIcon iconName="bed-outline" />
                <TouchableIcon iconName="bookmark-outline" />
                <TouchableIcon iconName="bulb-outline" />
            </Text>
        </View>
    )
}
