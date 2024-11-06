import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CategoryBoxProps {
  active: any;
  item: string;
  onPress: (item: string) => void;
}

export default function CategoryBox({ active, item, onPress }: CategoryBoxProps) {
  return (
    <TouchableOpacity
      onPress={() => {onPress(item)}}
      style={[{paddingHorizontal:9, justifyContent:'center', alignItems:'center', flexDirection:'row'},
        item === active && {backgroundColor: '#000'}
      ]}
    >
      <Text className="text-white text-sm font-semibold">{item}</Text>
    </TouchableOpacity>
  );
}
