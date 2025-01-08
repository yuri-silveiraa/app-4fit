import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; 

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome
                        size={28}
                        name="home"
                        color={color}
                        />
                    }}
      />
      <Tabs.Screen
        name="user"
        options={{
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
