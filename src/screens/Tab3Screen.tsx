import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab3Screen = () => {

    useEffect(() => {
        console.log('tab screen 3')
    }, [])

    return (
        <View>
            <Text>tab 3 screen</Text>
        </View>
    )
}
