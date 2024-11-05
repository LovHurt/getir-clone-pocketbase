import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function CustomBarNavigation() {
  return (
    <TouchableOpacity className='border-white border-2 rounded-full bg-getirColor p-2 h-14 w-14 -mt-3 justify-start items-center'>
        <Entypo name='list' size={32} color='#fdca00'/>
    </TouchableOpacity>
  )
}