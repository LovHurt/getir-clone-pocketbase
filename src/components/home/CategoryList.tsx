import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryProps } from "../../../types";
import { pb } from "../../lib/pocketbase";
import CategoryItem from "./CategoryItem";

const localCategories = [
    { id: "1", image: require("../../../assets/getir/categories/1.png"), name: "Category 1" },
    { id: "2", image: require("../../../assets/getir/categories/2.png"), name: "Category 2" },
    { id: "3", image: require("../../../assets/getir/categories/3.png"), name: "Category 3" },
    { id: "4", image: require("../../../assets/getir/categories/4.png"), name: "Category 4" },
    { id: "5", image: require("../../../assets/getir/categories/5.png"), name: "Category 5" },
    { id: "6", image: require("../../../assets/getir/categories/6.png"), name: "Category 6" },
    { id: "7", image: require("../../../assets/getir/categories/7.png"), name: "Category 7" },
    { id: "8", image: require("../../../assets/getir/categories/8.png"), name: "Category 8" },
    { id: "9", image: require("../../../assets/getir/categories/9.png"), name: "Category 9" },
    { id: "10", image: require("../../../assets/getir/categories/10.png"), name: "Category 10" },
    { id: "11", image: require("../../../assets/getir/categories/11.png"), name: "Category 11" },
    { id: "12", image: require("../../../assets/getir/categories/12.png"), name: "Category 12" },
    { id: "13", image: require("../../../assets/getir/categories/13.png"), name: "Category 13" },
    { id: "14", image: require("../../../assets/getir/categories/14.png"), name: "Category 14" },
    { id: "15", image: require("../../../assets/getir/categories/15.png"), name: "Category 15" },
    { id: "16", image: require("../../../assets/getir/categories/16.png"), name: "Category 16" },
    { id: "17", image: require("../../../assets/getir/categories/17.png"), name: "Category 17" },
    { id: "18", image: require("../../../assets/getir/categories/18.png"), name: "Category 18" },
  ];

export default function CategoryList() {
  const [categories, setCategories] = useState(localCategories);
  const [error, setError] = useState<any>(null);

  return (
    <View className="bg-getirBg p-4">
      <View className="flex flex-row flex-wrap w-full">
      {localCategories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}
