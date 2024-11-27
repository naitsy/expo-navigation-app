import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'

// Configura las rutas del stack

const StackLayout = () => {
    const navigation = useNavigation()
    const onHeaderLeftClick = (canGoBack:boolean) => {

        if( canGoBack ) {
            router.back()
            // navigation.dispatch( StackActions.pop() )
            return
        }


        navigation.dispatch( DrawerActions.toggleDrawer )
    }

    return (
    <Stack
        //screenListeners // sirve para saber el estado del stack, transicion, pantalla activa, etc
        screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white'
            },
            headerLeft: ({ tintColor, canGoBack }) => <FontAwesome 
                name={ canGoBack ? 'arrow-left' : 'bars' }
                color={ tintColor } 
                size={20} 
                className='mr-5'
                onPress={ () => onHeaderLeftClick(canGoBack) }/>
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