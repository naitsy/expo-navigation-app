import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { FontAwesome } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor:'rgba(0,0,0,.5)',
        drawerActiveTintColor: 'indigo',
        sceneStyle:{
          backgroundColor: 'white'
        },
        headerShadowVisible: false

    }}>
      <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
              drawerLabel: 'Usuario',
              title: 'Usuario',
              drawerIcon: ({ color, size }) => ( <FontAwesome name='user-circle' size={ size } color={ color } /> )
          }}
      />
      <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
              drawerLabel: 'Agenda', // titulo en el drawer
              title: 'Agenda', //titulo en el top bar
              drawerIcon: ({ color, size }) => ( <FontAwesome name='calendar' size={ size } color={ color } /> )              
          }}
      />
    </Drawer>
  )
}

export default DrawerLayout