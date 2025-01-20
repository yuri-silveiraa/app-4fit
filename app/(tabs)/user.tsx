import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Usuário</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Fulano de Tal</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Idade:</Text>
        <Text style={styles.value}>25 anos</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Peso:</Text>
        <Text style={styles.value}>75 kg</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Altura:</Text>
        <Text style={styles.value}>1,75 m</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color:"#ffffff"
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});
