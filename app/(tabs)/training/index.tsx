import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

const exercises = [
  { id: "1", name: "Supino Reto", videoUrl: "https://example.com/supino.mp4", description: "Exercício para o peitoral." },
  { id: "2", name: "Agachamento", videoUrl: "https://example.com/agachamento.mp4", description: "Exercício para pernas e glúteos." },
  { id: "3", name: "Rosca Direta", videoUrl: "https://example.com/rosca.mp4", description: "Exercício para o bíceps." },
];

export default function TrainingDietScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof exercises[0] }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        router.push({
          pathname: `/training-detail/${item.id}`,
          params: { name: item.name, videoUrl: item.videoUrl, description: item.description },
        })
      }
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dieta</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/my-diet/[id]")}
      >
        <Text style={styles.itemText}>Sua Dieta</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Treinos</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => router.push("/training/[id]")}
      >
        <Text style={styles.itemText}>Seu Treino</Text>
      </TouchableOpacity>

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
  },
  item: {
    padding: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
  }
});
