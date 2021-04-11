import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{ marginTop: insets.top }}>
            <Text>Settings</Text>
        </View>
    )
}
