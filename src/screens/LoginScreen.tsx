// src/screens/LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }: any) => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigateHome = () => navigation.navigate("home");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }
    try {
      await login(email, password);
      console.log("login yalandan çalıştı");
      navigateHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          className="w-32 h-16 mb-28"
          source={require("../../assets/logo.png")}
        />
        <Text className="text-getirText" style={styles.title}>
          Login
        </Text>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full px-4 py-3 bg-white border-2 mb-2 rounded-lg border-white"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          className="w-full px-4 py-3 bg-white border-2 mb-2 rounded-lg border-white"
        />
        <TouchableOpacity
          onPress={handleLogin}
          className="w-full border px-36 py-4 border-white bg-getirText"
        >
          <Text className="font-semibold text-xl text-black text-center border-1 border-getirText">
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Don't you have account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5d3ebc",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    marginTop: 16,
    textAlign: "center",
  },
  link: {
    color: "blue",
  },
});

export default LoginScreen;
