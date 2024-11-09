import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryProps, SubCategoryProps } from "../../types";
import { subcategories } from "../data/subcategories";
import SubCategoryBox from "./SubCategoryBox";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface SubCategoryFilterProps {
  category: CategoryProps;
  onSubCategorySelect : (subcategoryId: string) => void;

}

export default function SubCategoryFilter({
  category,
  onSubCategorySelect
}: SubCategoryFilterProps) {
  const [subCategories, setSubCategories] = useState<SubCategoryProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<any>();

  useEffect(() => {
    try {
      const filteredSubCategories = getSubcategoriesForCategory(category.id);
      setSubCategories(filteredSubCategories);
    } catch (err) {
      setError("Alt kategoriler yüklenirken bir hata oluştu.");
    }
  }, [category]);

  function getSubcategoriesForCategory(categoryId: string) {
    return subcategories.filter(
      (subcategory) => subcategory.categoryId === categoryId
    );
  }

  return (
    <ScrollView
      className="w-full px-4"
      horizontal={true}
      bounces={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ height: screenHeight * 0.1 }}
    >
      {subCategories.map((sub) => (
        <SubCategoryBox
          active={sub.id === activeSubCategory}
          key={sub.id}
          onPress={() => {
            setActiveSubCategory(sub.id);
            onSubCategorySelect(sub.id);
          }}
          item={sub.name}
        ></SubCategoryBox>
      ))}
    </ScrollView>
  );
}
