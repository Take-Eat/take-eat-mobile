import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Exp() {

    return (
        <View>
            <Text>Testano inicial</Text>
            <Link href="/sign-in">Login</Link>
        </View>
    )
}