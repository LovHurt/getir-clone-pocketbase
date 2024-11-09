import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CategoryBoxProps {
  active: boolean;
  item: {
    id: string;
    name: string;
  };
  onPress: (item: string) => void;
}

export default function CategoryBox({
  active,
  item,
  onPress,
}: CategoryBoxProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.id)}
      style={[
        {
          paddingHorizontal: 9,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
        active && { backgroundColor: "#5d38be" },
      ]}
    >
      <Text className="text-white text-sm font-semibold">{item.name}</Text>
    </TouchableOpacity>
  );
}
