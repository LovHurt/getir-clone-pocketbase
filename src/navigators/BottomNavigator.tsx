import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GiftScreen from "../screens/GiftScreen";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import CustomBarNavigation from "./CustomBarNavigation";
import HomeNavigator from "./header/HomeNavigator";
import StandartNavigator from "./header/StandartNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5D38BE",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      >
        {()=><StandartNavigator component={SearchScreen} name="search" textTitle="Search"/>}
      </Tab.Screen>
      
      <Tab.Screen
        name="CustomBar"
        component={CustomBarNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomBarNavigation />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
        >
        {()=><StandartNavigator component={ProfileScreen} name="profile" textTitle="Profile"/>}
      </Tab.Screen>
      <Tab.Screen
        name="Gift"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift-sharp" size={24} color={color} />
          ),
        }}
        >
        {()=><StandartNavigator component={GiftScreen} name="gift" logo textTitle="Gift"/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
