import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Cart: undefined;
};
type NavigationProps = StackNavigationProp<RootStackParamList, "Cart">;

export default function HeaderCartRight() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      className="bg-white p-2 m-2 h-8 flex-row rounded-xl items-center justify-center"
    >
      <Image
        source={require("../../../../assets/cart.png")}
        className="w-5 h-7 p-2"
      />
      <View className="flex flex-col bg-[#f3effe] h-7 items-center justify-center">
        <Text>{"\u20BA"}555</Text>
      </View>
    </TouchableOpacity>
  );
}
