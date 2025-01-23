import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    text: string,
    onPress: () => void
}

export default function Touchable({text, onPress}: Props){
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={onPress}
        >
            <Text style={styles.itemText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})