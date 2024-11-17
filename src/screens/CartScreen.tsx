import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { state, dispatch } = useCart();

  const handleRemove = (productId: string) => {
    dispatch({ type: "DECREMENT_ITEM", payload: productId });
  };
  const handleAdd = (productId: string) => {
    dispatch({ type: "INCREMENT_ITEM", payload: productId });
  };

  const deleteCartItem = (productId: string) => {
    dispatch({ type:"REMOVE_ITEM", payload: productId });
  };

  return (
      <View className="flex flex-1 bg-white">
        <ScrollView className="p-4">
          {state.items.map((item, index) => (
            <View className="flex flex-row items-center m-1 bg-slate-200 rounded-lg p-4">
              <Image
                source={item.productImage}
                style={{
                  width: 64,
                  height: 64,
                  marginRight: 8,
                  borderRadius: 8,
                }}
              />
              <View className="flex flex-1">
                <Text className="text-base font-semibold">
                  {item.productName}
                </Text>
                <Text className="text-red-600 font-semibold">
                  {item.productPrice} {"\u20BA"}
                </Text>
              </View>
              <View className="flex flex-row items-center">
                <TouchableOpacity
                  className="bg-getirColor p-2 rounded-lg"
                  onPress={() => handleRemove(item.productId)}
                >
                  <Text className="text-l font-bold text-white">-</Text>
                </TouchableOpacity>
                <Text className="text-lg mx-4 font-bold text-gray-800">
                  {item.productQuantity}
                </Text>
                <TouchableOpacity
                  className="bg-getirColor p-2 rounded-lg"
                  onPress={() => handleAdd(item.productId)}
                >
                  <Text className="text-l font-bold text-white">+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="p-2 rounded-lg"
                  onPress={() => deleteCartItem(item.productId)}
                >
                  <Text className="text-base p-1 mr-0 text-white font-bold bg-red-600">
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="p-8 border-t-2 border-t-getirColor2 bg-getirColor">
          <View className="flex flex-row justify-center mb-4 gap-3">
            <Text className="text-xl font-semibold text-white">Total</Text>
            <Text className="text-xl font-semibold text-white">{state.total} {"\u20BA"}</Text>
          </View>
          <TouchableOpacity className="items-center justify-center p-4 rounded-xl bg-getirText">
            <Text className="text-lg text-getirColor font-semibold">Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
