import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryProps } from "../../../types";
import { pb } from "../../lib/pocketbase";
import CategoryItem from "./CategoryItem";

export const localCategories = [
    { id: "1", image: require("../../../assets/getir/categories/1.png"), name: "Discount" },
    { id: "2", image: require("../../../assets/getir/categories/2.png"), name: "Drinks" },
    { id: "3", image: require("../../../assets/getir/categories/3.png"), name: "Fruits" },
    { id: "4", image: require("../../../assets/getir/categories/4.png"), name: "Bread" },
    { id: "5", image: require("../../../assets/getir/categories/5.png"), name: "Pasta" },
    { id: "6", image: require("../../../assets/getir/categories/6.png"), name: "Candies" },
    { id: "7", image: require("../../../assets/getir/categories/7.png"), name: "Ice Cream" },
    { id: "8", image: require("../../../assets/getir/categories/8.png"), name: "Milk" },
    { id: "9", image: require("../../../assets/getir/categories/9.png"), name: "Breakfast" },
    { id: "10", image: require("../../../assets/getir/categories/10.png"), name: "Cookies" },
    { id: "11", image: require("../../../assets/getir/categories/11.png"), name: "Fit Foods" },
    { id: "12", image: require("../../../assets/getir/categories/12.png"), name: "Personal Care" },
    { id: "13", image: require("../../../assets/getir/categories/13.png"), name: "Animal" },
    { id: "14", image: require("../../../assets/getir/categories/14.png"), name: "Baby" },
    { id: "15", image: require("../../../assets/getir/categories/15.png"), name: "Sexual Health" },
    { id: "16", image: require("../../../assets/getir/categories/16.png"), name: "Cleaning" },
    { id: "17", image: require("../../../assets/getir/categories/17.png"), name: "Tech" },
    { id: "18", image: require("../../../assets/getir/categories/18.png"), name: "Home" },
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
