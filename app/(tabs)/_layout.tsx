import { Tabs } from "expo-router";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"; 

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red', tabBarStyle: {backgroundColor: "#191919"} }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="home"
                        color={color}
                        />
                    }}
      />
      <Tabs.Screen
        name="training"
        options={{
          headerShown: false,
          title: "Treino e Dieta",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons
                        size={28}
                        name="arm-flex"
                        color={color}
                    />
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          title: "User",
          tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="user"
                        color={color}
                    />
        }}
      />
      
    </Tabs>
  );
}
