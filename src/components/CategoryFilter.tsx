import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { CategoryProps } from "../../types";
import CategoryItem from "./home/CategoryItem";
import CategoryBox from "./CategoryBox";
import { categories } from "../data/categories";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface CategoryFilterProps {
  category: CategoryProps;
}

export default function CategoryFilter({ category }: CategoryFilterProps) {
  const [ctegories, setCtegories] = useState<CategoryProps[]>([]);
  const [error, setError] = useState(null);

  return (
    <ScrollView
      className="w-full bg-getirColor2 px-4"
      horizontal={true}
      bounces={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ height: screenHeight * 0.1 }}
    >
      {categories.map((item) => (
        <CategoryBox
          active={category.name}
          key={item.id}
          item={item.name}
          onPress={(itemName) => console.log(`clicked ${itemName}`)}
        />
      ))}
    </ScrollView>
  );
}
