import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { CategoryProps } from '../../types';

export default function CategoryDetailScreen() {
    const route = useRoute();

    const {category} = route.params as {category : CategoryProps}
    
  return (
    <View>
      <Text>{category.name}</Text>
    </View>
  )
}