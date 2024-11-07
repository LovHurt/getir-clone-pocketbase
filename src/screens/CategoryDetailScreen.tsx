import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { CategoryProps } from '../../types';
import CategoryFilter from '../components/CategoryFilter';
import SubCategoryFilter from '../components/SubCategoryFilter';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const {category} = route.params as {category : CategoryProps}
    
  return (
    <View>
      <CategoryFilter category={category}/>
      <SubCategoryFilter category={category}/>
      <Text>{category.name}</Text>
    </View>
  )
}