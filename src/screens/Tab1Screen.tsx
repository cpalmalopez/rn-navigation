import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('tab screen 1')
    }, [])

    return (
        <View>
            <Text>tab 1 screen</Text>
        </View>
    )
}
