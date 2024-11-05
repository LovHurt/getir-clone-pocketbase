import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { CategoryProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  CategoryDetail: { category: any };
};
type NavigationProps = StackNavigationProp<
  RootStackParamList,
  "CategoryDetail"
>;
type CategoryItemProps= {
  item: CategoryProps
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function CategoryItem({ item }: CategoryItemProps) {
  const navigation = useNavigation<NavigationProps>();

  const handlePress = () => {
    navigation.navigate("CategoryDetail", { category: item });
  };
  return (
    <TouchableOpacity
      style={{ width: screenWidth * 0.2, height: screenHeight * 0.2 }}
      className="flex flex-col items-center justify-normal ml-2"
      onPress={handlePress}
    >
      <Image
        source={item.image}
        style={{ width: screenWidth * 0.2, height: screenHeight * 0.1 }}
      />
      <Text className="text-xs mb-4 mt-2 mr-3">{item.name}</Text>
    </TouchableOpacity>
  );
}
