import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className='px-10'>


			<CustomButton 
				color={'primary'}
				onPress={ () => router.push('/products') }
        className='mb-2'
			>
				Products
			</CustomButton>

			<CustomButton 
				color={'secondary'}
				onPress={ () => router.push('/profile') }
        className='mb-2'        
			>
				Profile
			</CustomButton>    

			<CustomButton 
				color={'terciary'}
				onPress={ () => router.push('/settings') }
        className='mb-2'
			>
				Settings
			</CustomButton>        

			<CustomButton 
				color={'primary'}
				onPress={ () => router.push('/products') }
        variant='text-only'
        className='mb-2'
			>
				Products
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
}

export default HomeScreen