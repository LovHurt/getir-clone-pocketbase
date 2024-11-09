import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { CategoryProps } from "../../types";
import CategoryItem from "./home/CategoryItem";
import CategoryBox from "./CategoryBox";
import { categories } from "../data/categories";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface CategoryFilterProps {
  category: CategoryProps;
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryFilter({
  category,
  onCategorySelect,
}: CategoryFilterProps) {
  const [ctegories, setCtegories] = useState<CategoryProps[]>([]);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState<string>(category.id);

  return (
    <ScrollView
      className="w-full bg-getirColor2 px-4 text-white"
      horizontal={true}
      bounces={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ height: screenHeight * 0.1 }}
    >
      {categories.map((item) => (
        <CategoryBox
          active={activeCategory === item.id}
          key={item.id}
          item={item}
          onPress={() => {
            setActiveCategory(item.id);
            onCategorySelect(item.id);
          }}
        />
      ))}
    </ScrollView>
  );
}
