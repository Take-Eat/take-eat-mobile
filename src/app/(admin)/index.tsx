import { globalStyles } from "@/src/assets/styles/Global";
import { useAuth } from "@/src/context/AuthContext";
import { Pressable, Text, View } from "react-native";

export default function AdminDashboardScreen() {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Dashboard Admin</Text>
      <Pressable
        onPress={() => {
          logout();
        }}
      >
        <Text style={globalStyles.textRegular}>Sair</Text>
      </Pressable>
    </View>
  );
}
