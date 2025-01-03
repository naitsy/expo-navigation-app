import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'


export class ProductsScreen extends Component {
  render() {
    return (
      <View className='flex flex-1 px-4'>
        
        <FlatList 
          data={ products }
          keyExtractor={ ( item ) => item.id  }
          renderItem={ ( { item } ) => ( 
            <View className='mt-10'>
              <Text className='text-2xl font-work-black'>{ item.title }</Text>
              <Text className=''>{ item.description }</Text>

              <View className='flex flex-row justify-between'>
                <Text className='font-work-black'>
                  { item.price }
                </Text>
                <Link href={`/drawer/tabs/(stack)/products/${ item.id }`}
                  className='text-primary'>
                  Ver detalles
                </Link>
              </View>


            </View>


          )}
        />
      </View>
    )
  }
}

export default ProductsScreen