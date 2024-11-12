import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("logout fail ", error);
    }
  };
  return (
    <View className="flex flex-1 items-center justify-center p-8">
      <Text className="text-4xl">Profile</Text>
      {user ? (
        <>
          <View className="mt-12">
            <Text className="text-lg">Name : {user.name}</Text>
            <Text className="text-lg mb-2">Email : {user.email}</Text>
            <Button title="Logout" onPress={handleLogout}></Button>
          </View>
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
