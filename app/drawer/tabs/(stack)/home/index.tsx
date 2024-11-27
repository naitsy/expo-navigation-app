import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

	const navigation = useNavigation()

	const onToggleDrawer = () => {

		navigation.dispatch( DrawerActions.toggleDrawer )

	}

    return (
      <SafeAreaView>
        <View className='px-10'>


			<CustomButton 
				color={'primary'}
				onPress={ () => router.push('/drawer/tabs/(stack)/products') }
        className='mb-2'
			>
				Products
			</CustomButton>

			<CustomButton 
				color={'secondary'}
				onPress={ () => router.push('/drawer/tabs/(stack)/profile') }
        className='mb-2'        
			>
				Profile
			</CustomButton>    

			<CustomButton 
				color={'terciary'}
				onPress={ () => router.push('/drawer/tabs/(stack)/settings') }
        className='mb-2'
			>
				Settings
			</CustomButton>        

			<CustomButton 
				color={'primary'}
				onPress={ () => router.push('/drawer/tabs/(stack)/products') }
        variant='text-only'
        className='mb-2'
			>
				Products
			</CustomButton>

			<CustomButton
				color={'primary'}
				onPress={ onToggleDrawer }>
				Abrir Menu				
			</CustomButton>


			{/* <Link href="/products" asChild>
				<CustomButton color={'primary'}>
					Productos
				</CustomButton>			
			</Link> */}

          {/* <Link className='mb-5' href="/products">Productos</Link>
          <Link className='mb-5' href="/profile">Perfil</Link>
          <Link className='mb-5' href="/settings">Ajustes</Link> */}
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen