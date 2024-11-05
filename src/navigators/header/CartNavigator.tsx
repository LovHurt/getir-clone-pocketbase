import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../../screens/CartScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function CartNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartDetail"
        component={CartScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              className="m-2"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View>
              <Text className="text-white font-semibold text-lg">Sepetim </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              className=" m-2 items-center justify-center"
            >
              <AntDesign name="delete" size={24} color="white"/>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
