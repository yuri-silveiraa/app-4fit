import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === "usuario@example.com" && password === "123456") {
        Alert.alert("Bem-vindo!", "Login realizado com sucesso.");
        router.push("/(tabs)/home"); // Redireciona para a página inicial
      } else {
        Alert.alert("Erro", "Credenciais inválidas.");
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        theme={{ colors: { primary: "#FFF", text: "#FFF", placeholder: "#CCC" } }}
      />

      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: "#FFF", text: "#FFF", placeholder: "#CCC" } }}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={styles.button}
        buttonColor="#FF0000"
      >
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#404040",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#FFF"
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#606060"
  },
  button: {
    marginTop: 10,
  }
});
