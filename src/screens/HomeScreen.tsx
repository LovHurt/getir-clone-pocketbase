import {
  View,
  Text,
  ScrollView,
  Alert,
  Button,
  StyleSheet,
} from "react-native";
import React from "react";
import HeaderMain from "../components/home/HeaderMain";
import SliderCarousel from "../components/home/SliderCarousel";
import CategoryList from "../components/home/CategoryList";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("Başarılı", "Çıkış yapıldı.");
    } catch (error) {}
  };
  return (
    <>
      <View>
        <View className="flex flex-row justify-between items-center p-1 bg-getirColor2">
          <Text className="font-semibold text-lg text-black">Welcome, {user?.email}!</Text>
          <TouchableOpacity className="bg-red-500 px-2 py-2 rounded" onPress={handleLogout}><Text>Logout</Text></TouchableOpacity>
          </View>
        <HeaderMain />
      </View>
      <ScrollView className="h-full bg-getirBg">
        <SliderCarousel />
        <CategoryList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 24,
    color:'black'
  },
});
