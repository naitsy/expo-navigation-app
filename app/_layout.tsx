import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    )
}

export default RootLayout
