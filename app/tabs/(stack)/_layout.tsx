import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// Configura las rutas del stack

const StackLayout = () => {
  return (
    <Stack
        //screenListeners // sirve para saber el estado del stack, transicion, pantalla activa, etc
        screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen
            name='home/index' 
            options={{
                title:'Home Screen',
                // animation: 'simple_push'
            }}
        />
        <Stack.Screen
            name='products/index' 
            options={{
                title:'Products Screen'
            }}
        />
        <Stack.Screen
            name='profile/index' 
            options={{
                title:'Profile Screen'
            }}
        />
        <Stack.Screen
            name='settings/index' 
            options={{
                title:'Settings Screen'
            }}
        />                


    </Stack>
  )
}

export default StackLayout