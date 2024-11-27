import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={
        { 
          tabBarActiveTintColor: 'white', 
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black'
          } 
      }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Start',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="slack" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout