import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

import "../global.css"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [ fontsLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    })

    useEffect( () => {
        if( error ) throw error

        if( fontsLoaded ) SplashScreen.hideAsync()

    }, [fontsLoaded, error])


    if( !fontsLoaded && !error ) return null

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Slot />
        </View>
    )
}

export default RootLayout
