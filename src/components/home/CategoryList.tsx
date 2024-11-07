import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryProps } from "../../../types";
import { pb } from "../../lib/pocketbase";
import CategoryItem from "./CategoryItem";
import { categories } from "../../data/categories";



export default function CategoryList() {
  const [ctegories, setCtegories] = useState(categories);
  const [error, setError] = useState<any>(null);

  return (
    <View className="bg-getirBg p-4">
      <View className="flex flex-row flex-wrap w-full">
      {ctegories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}
