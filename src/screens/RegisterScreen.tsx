// src/screens/RegisterScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }: any) => {
  const { register } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    if (email === "" || password === "") {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      await register(email, password);
      Alert.alert("Success", "Kayıt başarılı! Giriş yapabilirsiniz.", [
        { text: "Okay", onPress: () => navigation.navigate("Login") },
      ]);
    } catch (error) {
      console.log("registerscreen error 23 : ", error);
    }
  };

  return (
    <View  style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          className="w-32 h-16 mb-28"
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.title}>Register</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.accountText}>
          <Text style={styles.linkText}>Do you have an account?</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full px-4 py-3 bg-white border-2 mb-2 rounded-lg border-white"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="w-full px-4 py-3 bg-white border-2 mb-2 rounded-lg border-white"
        />
        <TouchableOpacity className="w-full border p-4 border-white bg-getirText">
        <Text className="text-black text-xl font-semibold text-center border border-getirText" onPress={handleRegister}>Register</Text>
        </TouchableOpacity>
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
  logo: {
    width: 128,
    height: 64,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  accountText: {
    padding: 8,
    marginBottom: 20,
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});

export default RegisterScreen;
