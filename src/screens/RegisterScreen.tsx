// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import useAuth from '../hooks/useAuth';

const RegisterScreen = ({ navigation }: any) => {
  const { register } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    if (email === '' || password === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      await register(email, password);
      Alert.alert('Success', 'Kayıt başarılı! Giriş yapabilirsiniz.', [
        { text: 'Okay', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
        console.log("registerscreen error 23 : ", error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Parola"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
      <Text style={styles.text}>
        Zaten hesabınız var mı?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Giriş Yap
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;