import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { useLocalSearchParams } from "expo-router";

export default function TrainingDetailScreen() {
  const { name, videoUrl, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Video
        source={{ uri: videoUrl as string }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
