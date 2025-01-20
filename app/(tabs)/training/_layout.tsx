import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="my-diet/[id]" options={{headerShown: false }}/>
            <Stack.Screen name="my-training/[id]" options={{headerShown: false }}/>
            <Stack.Screen name="training-detail/[id]" options={{headerShown: false }}/>
        </Stack>
    )
}