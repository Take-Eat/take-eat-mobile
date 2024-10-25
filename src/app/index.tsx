import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Exp() {
  return (
    <View className="flex-1 justify-center items-center gap-6">
      <Text className="text-black text-2xl">Testano inicial</Text>
      <Link className="text-black text-2xl" href="/sign-in">
        Login
      </Link>
      <Link className="text-black text-2xl" href="/(tabs)">
        Home
      </Link>
    </View>
  );
}
