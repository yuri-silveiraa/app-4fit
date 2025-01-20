import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Img } from "../../data";

export default function HomeScreen() {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Feed</Text>

      <ScrollView horizontal style={styles.container1}>

            <Image
            source={{ uri: Img.img1 }}
            style={styles.image}
            />
            <Image
            source={{ uri: Img.img2 }}
            style={styles.image}
            />
            <Image
            source={{ uri: Img.img3 }}
            style={styles.image}
            />
            <Image
            source={{ uri: Img.img4 }}
            style={styles.image}
            />
      </ScrollView>

      <View style={styles.tabsContainer}>
        <Text style={styles.tab}>Treino</Text>
        <Text style={styles.tab}>Dieta</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    padding: 16,
  },
  container1: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#FFFFFF"
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  tab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF0000",
  },
});
