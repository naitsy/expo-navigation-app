import { Pressable, PressableProps, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props extends PressableProps {
    children: string,
    color: 'primary' | 'secondary' | 'terciary',
    variant?: 'contained' | 'text-only',
    className?: string
}

const CustomButton = ({ children, color, onPress, variant = 'contained', className }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        terciary: 'bg-terciary'
    }[ color ]

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        terciary: 'text-terciary'
    }[ color ]


    if( variant === 'text-only' ){
        return (
            <Pressable 
                className={`p-3`}
                onPress={ onPress }
            >
                <Text className={`text-center ${ textColor } font-work-medium`}>{ children }</Text>
            </Pressable>
        )            
    }

    return (
        <Pressable 
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${ className }`}
            onPress={ onPress }
        >
            <Text className='text-white text-center font-work-medium'>{ children }</Text>
        </Pressable>
    )

}

export default CustomButton