import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    text: string,
    onPress: () => void
}

export default function Button({text, onPress}: Props){
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})