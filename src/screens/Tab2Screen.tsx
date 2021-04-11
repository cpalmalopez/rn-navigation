import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab2Screen = () => {
    
    useEffect(() => {
        console.log('tab screen 2')
    }, [])
    
    return (
        <View>
            <Text>tab 2 screen</Text>
        </View>
    )
}
