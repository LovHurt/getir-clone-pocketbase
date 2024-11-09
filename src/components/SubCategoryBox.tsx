import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface SubCategoryBoxProps {
  active: boolean;
  item: string;
  onPress: (item: string) => void;
}

export default function SubCategoryBox({
  active,
  item,
  onPress,
}: SubCategoryBoxProps) {
  return (
    <TouchableOpacity
    className="mt-1 mb-1"
      onPress={() => {
        onPress(item);
      }}
      style={[
        {
          paddingHorizontal: 9,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderWidth:active ? 2 : 0,
          borderColor: active ? "#7849f7" : "transparent"
        },
      ]}
    >
      <Text className="text-black p-2 text-sm">{item}</Text>
    </TouchableOpacity>
  );
}
