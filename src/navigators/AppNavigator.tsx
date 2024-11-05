import { View, Text } from "react-native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
import CartScreen from "../screens/CartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import StandartNavigator from "./header/StandartNavigator";
import CartNavigator from "./header/CartNavigator";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomNavigator} />
      <Stack.Screen name="Cart">
        {() => <CartNavigator/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
