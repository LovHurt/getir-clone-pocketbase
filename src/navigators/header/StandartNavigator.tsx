import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import HeaderCartRight from "./part/HeaderCartRight";
import HeaderLeftBack from "./part/HeaderLeftBack";

type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  [key: string]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
interface StandartNavigatorProps {
  component: React.ComponentType<any>;
  name: string;
  logo?: boolean;
  textTitle?: string;
}

type NavigationProps = StackNavigationProp<RootStackParamList, "Home">;

export default function StandartNavigator({
  component,
  name,
  logo,
  textTitle,
}: StandartNavigatorProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeftBack />,
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
          headerRight: () => <HeaderCartRight />,
        }}
      />
    </Stack.Navigator>
  );
}
