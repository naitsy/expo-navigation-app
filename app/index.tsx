import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const App = () => {
  return (

    <Redirect href='/drawer' />

    // <SafeAreaView>        
    //     <View className='mt-6 mx-2'>
    //         <Text className='text-3xl font-work-black text-primary'>Texto de prueba</Text>
    //         <Text className='text-2xl font-work-medium text-secondary-100'>Texto de prueba</Text>
    //         <Text className='text-xl font-work-light  text-terciary'>Texto de prueba</Text>
    //     </View>


    //     <Link href='/products' > Productos </Link>
    // </SafeAreaView>
  )
}

export default App