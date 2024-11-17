import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ProductProps } from "../../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";
import { useCart } from "../context/CartContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const route = useRoute();
  const { product } = route.params as { product: ProductProps };
  const [selectedProduct, setSelectedProduct] = useState<string>(product.id);
  const [quantity, setQuantity] = useState(1);
  
  const {user} = useAuth();
  const { dispatch } = useCart();
  
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  
    const handleAddToCart = () => {
      if (!user) {
        alert("Please log in to add items to your cart");
        return;
      }
      dispatch({
        type: "ADD_ITEM",
        payload: {
          productId: product.id,
          productName: product.name,
          productPrice: product.sellingPrice,
          productQuantity: quantity,
          productImage: product.images[0],
        },
      });
      alert(`${product.name}, ${quantity} item(s) added to the cart!`);    
    };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <ScrollView horizontal className="flex-row mb-4">
          {product.images?.map((image, index) => (
            <Image
              key={index}
              source={image}
              className="w-96 h-72 rounded-xl mr-2"
            />
          ))}
        </ScrollView>
        <Text className="text-2xl font-bold text-getirColor mb-2">
          {product.name}
        </Text>
        <Text className="text-gray-400 font-semibold text-xs mt-1">
          {product.type == "unit" ? "1" : "1000"} {product.type}
        </Text>
        <View className="flex-row mt-2 items-center">
          <Text className="line-through text-gray-500 text-lg mr-4">
            {product.price} {"\u20BA"}
          </Text>
          <Text className="text-getirColor text-lg ">
            {product.sellingPrice} {"\u20BA"}
          </Text>
        </View>
        <Text className="text-base text-gray-600 mt-4">
          {product.description}
        </Text>
        <View className="flex-row items-center mt-4">
          <TouchableOpacity className="bg-gray-300 p-2 rounded-lg" onPress={decreaseQuantity}>
            <Text className="text-xl font-bold text-gray-800">-</Text>
          </TouchableOpacity>
          <Text className="text-lg mx-4 font-bold text-gray-800">{quantity}</Text>
          <TouchableOpacity className="bg-gray-300 p-2 rounded-lg" onPress={increaseQuantity}>
            <Text className="text-xl font-bold text-gray-800">+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart} className="mt-8 bg-getirColor p-4 rounded-lg items-center">
            <Text className="text-lg font-bold text-getirText">Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
