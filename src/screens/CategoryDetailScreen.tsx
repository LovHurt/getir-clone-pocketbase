import { View, Text } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { CategoryProps } from "../../types";
import CategoryFilter from "../components/CategoryFilter";
import SubCategoryFilter from "../components/SubCategoryFilter";

export default function CategoryDetailScreen() {
  const route = useRoute();

  const { category } = route.params as { category: CategoryProps };
  const [selectedCategory, setSelectedCategory] = useState<string>(category.id);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  return (
    <View>
      <CategoryFilter category={category} onCategorySelect={(categoryId)=> {
        setSelectedCategory(categoryId)
        setSelectedSubCategory(null)
      }} />
      <SubCategoryFilter 
      category={{...category, id:selectedCategory}}
      onSubCategorySelect={(subcategoryId)=>setSelectedCategory(subcategoryId)} 
      />
      <Text>{category.name}</Text>
    </View>
  );
}
