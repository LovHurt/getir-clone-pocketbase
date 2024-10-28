import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderMain from '../components/home/HeaderMain'

export default function HomeScreen() {
  return (
    <ScrollView className='h-full bg-getirBg'>
        <HeaderMain/>
    </ScrollView>
  )
}