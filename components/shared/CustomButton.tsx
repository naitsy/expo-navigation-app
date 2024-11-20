import { Pressable, PressableProps, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props extends PressableProps {
    children: string,
    color: 'primary' | 'secondary' | 'terciary'
}

const CustomButton = ({ children, color, onPress }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        terciary: 'bg-terciary'
    }[ color ]


    return (
        <Pressable 
            className={`p-3 rounded-md ${btnColor} active:opacity-90`}
            onPress={ onPress }
        >
            <Text className='text-white'>{ children  }</Text>
        </Pressable>
    )

}

export default CustomButton