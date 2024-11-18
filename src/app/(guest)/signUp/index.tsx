import { View, Text, ScrollView, Dimensions, Image, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { Container } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";

export default function SignUpDefault() {
    const router = useRouter()

    return (
        <ScrollView>
            <Container>
                <View
                    className="w-full flex justify-around items-center px-7"
                    style={{
                        minHeight: Dimensions.get("window").height,
                    }}
                >
                    <Image
                        source={require("@/src/assets/images/logo_take_eat_plate.png")}
                        resizeMode="contain"
                        className="w-[135px]"
                    />
                    <View className="flex gap-3 justify-center items-center">
                        <Text className="text-center mb-6" style={globalStyles.heading1}>Como você deseja contribuir com o Take Eat?</Text>
                        <View className="flex w-full gap-5">
                            <Pressable className="flex-row gap-x-2 items-center" onPress={() => router.push({
                                pathname: "/signUp/[type]",
                                params: { type: "apoiador" }
                            })}>
                                <View className="w-[20px] h-[20px] rounded-full bg-gray-400"></View>
                                <Text style={globalStyles.textLarger}>Take Apoiadores</Text></Pressable>
                            <Pressable className="flex-row gap-x-2 items-center" onPress={() => router.push({
                                pathname: "/signUp/[type]",
                                params: { type: "doador" }
                            })}>
                                <View className="w-[20px] h-[20px] rounded-full bg-gray-400"></View>
                                <Text style={globalStyles.textLarger}>Take Doadores</Text></Pressable>
                            <Pressable className="flex-row gap-x-2 items-center" onPress={() => router.push({
                                pathname: "/signUp/[type]",
                                params: { type: "distribuidor" }
                            })}>
                                <View className="w-[20px] h-[20px] rounded-full bg-gray-400"></View>
                                <Text style={globalStyles.textLarger}>Take Distribuidores</Text></Pressable>
                            <Pressable className="flex-row gap-x-2 items-center" onPress={() => router.push({
                                pathname: "/signUp/[type]",
                                params: { type: "entregador" }
                            })}>
                                <View className="w-[20px] h-[20px] rounded-full bg-gray-400"></View>
                                <Text style={globalStyles.textLarger}>Take Entregadores</Text></Pressable>
                        </View>
                        <Text style={globalStyles.textSmallGray}>Aceito os <Text className="text-primary underline">termos de uso</Text></Text>
                    </View>
                    <View className="flex flex-row gap-x-1">
                        <Text style={globalStyles.textRegular}>Já possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/(guest)/signIn">Login</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
};