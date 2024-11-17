import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { ProductProps } from "../../../types";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useCart } from "../../context/CartContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type RootStackParamList = {
  ProductDetails: { product: ProductProps };
};
interface ProductItemProps {
  product: ProductProps;
}

export default function ProductItem({ product }: ProductItemProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        productId: product.id,
        productName: product.name,
        productPrice: product.sellingPrice,
        productQuantity: 1, // Default olarak 1 adet ekliyoruz
        productImage: product.images[0],
      },
    });
    alert(`${product.name} sepete eklendi!`);
  };

  return (
    <TouchableOpacity
      style={{ width: screenWidth * 0.285, height: screenHeight * 0.3 }}
      className="mt-3 flex items-start mx-2 rounded-xl bg-white p-3"
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      {product.images && product.images[0] && (
        <Image
          source={product.images[0]}
          style={{ width: screenWidth * 0.23, height: screenHeight * 0.18 }}
          resizeMode="cover"
        />
      )}
      <View className="flex-row mt-2 items-center">
        <Text className="line-through text-gray-500 text-xs">
          {product.price} {"\u20BA"}
        </Text>
        <Text className="text-getirColor text-xs mx-auto">
          {product.sellingPrice} {"\u20BA"}
        </Text>
      </View>
      <Text className="font-semibold text-xs mt-1">{product.name}</Text>
      <Text className="text-gray-400 font-semibold text-xs mt-1">
        {product.type == "unit" ? "1" : "1000"} {product.type}
      </Text>

      <TouchableOpacity
        style={{
          top: -7,
          right: -7,
          width: 30,
          height: 30,
        }}
        className="absolute border rounded-full flex-row justify-center items-center bg-white"
        onPress={handleAddToCart}
      >
        <Entypo name="plus" size={22} color="#5d3ebd" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
