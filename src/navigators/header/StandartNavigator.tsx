import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface StandartNavigatorProps {
  component: React.ComponentType<any>;
  name: string;
  logo?: boolean;
  textTitle?: string;
}
const Stack = createStackNavigator();

export default function StandartNavigator({
  component,
  name,
  logo,
  textTitle,
}: StandartNavigatorProps) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              className="m-2"
              onPress={() => navigation.goBack()}
            >
              <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View>
              {logo ? (
                <Image
                  resizeMode="contain"
                  className="w-16 h-8"
                  source={require("../../../assets/logo.png")}
                />
              ) : (
                <Text className="text-white font-semibold text-lg">
                  {textTitle}
                </Text>
              )}
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              className="bg-white p-2 m-2 h-8 flex-row rounded-xl items-center justify-center"
            >
              <Image
                source={require("../../../assets/cart.png")}
                className="w-5 h-7 p-2"
              />
              <View className="flex flex-col bg-[#f3effe] h-7 items-center justify-center">
                <Text>{"\u20BA"}555</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
