import { View, Text, Image } from "react-native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
import CartScreen from "../screens/CartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import StandartNavigator from "./header/StandartNavigator";
import CartNavigator from "./header/CartNavigator";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import HeaderLeftBack from "./header/part/HeaderLeftBack";
import HeaderCartRight from "./header/part/HeaderCartRight";
import useAuth from "../hooks/useAuth";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="BottomTabs" component={BottomNavigator} />
          <Stack.Screen name="Cart">{() => <CartNavigator />}</Stack.Screen>
          <Stack.Screen
            name="CategoryDetail"
            component={CategoryDetailScreen}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#5c3ebc" },
              headerTitleAlign: "center",
              headerTitle: () => (
                <View>
                  <Image
                    resizeMode="contain"
                    className="w-16 h-8"
                    source={require("../../assets/logo.png")}
                  />
                </View>
              ),
              headerLeft: () => <HeaderLeftBack />,
              headerRight: () => <HeaderCartRight />,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailScreen}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#5c3ebc" },
              headerTitleAlign: "center",
              headerTitle: () => (
                <View>
                  <Image
                    resizeMode="contain"
                    className="w-16 h-8"
                    source={require("../../assets/logo.png")}
                  />
                </View>
              ),
              headerLeft: () => <HeaderLeftBack />,
              headerRight: () => <HeaderCartRight />,
            }}
          ></Stack.Screen>
           <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: "#5c3ebc" },
              headerTitleAlign: "center",
              headerTitle: () => (
                <View>
                  <Image
                    resizeMode="contain"
                    className="w-16 h-8"
                    source={require("../../assets/logo.png")}
                  />
                </View>
              ),
              headerLeft: () => <HeaderLeftBack />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
