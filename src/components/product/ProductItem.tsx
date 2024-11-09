import { View, Text } from "react-native";
import React from "react";
import { ProductProps } from "../../../types";

interface ProductItemProps {
  product: ProductProps;
}

export default function ProductItem({ product }: ProductItemProps) {

  return (
    <View>
      <Text>ProductItem</Text>
    </View>
  );
}
