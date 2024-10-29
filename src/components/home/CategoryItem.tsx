import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { CategoryProps } from "../../../types";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function CategoryItem({ item }: any) {
  return (
    <TouchableOpacity
      style={{ width: screenWidth * 0.20, height: screenHeight * 0.20 }}
      className="flex flex-col items-center justify-normal ml-2"
    >
      <Image
        source={item.image}
        style={{ width: screenWidth * 0.20, height: screenHeight * 0.10 }}
      />
      <Text className="text-xs mb-4 mt-2 mr-3">{item.name}</Text>
    </TouchableOpacity>
  );
}
