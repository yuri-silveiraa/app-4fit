import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import Touchable from "../../../components/button";

const exercises = [
  { id: "1", name: "Supino Reto", videoUrl: "https://example.com/supino.mp4", description: "Exercício para o peitoral." },
  { id: "2", name: "Agachamento", videoUrl: "https://example.com/agachamento.mp4", description: "Exercício para pernas e glúteos." },
  { id: "3", name: "Rosca Direta", videoUrl: "https://example.com/rosca.mp4", description: "Exercício para o bíceps." },
];

export default function TrainingDietScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof exercises[0] }) => (
    <Touchable 
      text={item.name}
      onPress={() => router.push({
        pathname: `./training/training-detail/${item.id}`,
        params: { name: item.name, videoUrl: item.videoUrl, description: item.description }
      })} 
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dieta</Text>
      <Touchable
        text="Sua Dieta"
        onPress={() => router.push("./my-diet/[id].tsx")}
      />

      <Text style={styles.title}>Treinos</Text>
      <Touchable 
        text="Seu Treino"
        onPress={() => router.push("./my-training/[id].tsx")}
      />

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
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
    color: "#FFFFFF"
  },
  list: {
    marginTop: 16,
  }
});
