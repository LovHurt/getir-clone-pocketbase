import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/navigators/BottomNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <View className="mt-14"></View>
      <BottomNavigator/>
    </NavigationContainer>
  );
}
