import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className='px-10'>
          <Link className='mb-5' href="/products">Productos</Link>
          <Link className='mb-5' href="/profile">Perfil</Link>
          <Link className='mb-5' href="/settings">Ajustes</Link>
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen