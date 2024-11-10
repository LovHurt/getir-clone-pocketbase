import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigators/AppNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View className="mt-14"></View>
      <StatusBar style="auto" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
