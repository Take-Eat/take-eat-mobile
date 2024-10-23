import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { colors } from "@/src/assets/styles/Global";
import { Link } from "expo-router";



const SignIn = () => {
    const [form, setForm] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    });

    const submit = () => {
        console.log(form)
    }

    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-evenly items-center h-full px-4 my-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        source={require("@/src/assets/images/logo_take_eat_black.png")}
                        resizeMode="contain"
                        className="w-[135px]"
                    />
                    <View className="flex w-full gap-3">
                        {/* <Text>E-mail</Text> */}
                        <TextInput
                            id="email"
                            placeholder="E-mail"
                            textContentType="emailAddress"
                            className="h-[40px] bg-gray-700 pl-4 rounded-md"
                        />
                        {/* <Text>Senha</Text> */}
                        <TextInput
                            id="senha"
                            placeholder="Senha"
                            textContentType="password"
                            className="h-[40px] bg-gray-700 pl-4 rounded-md"
                        />

                        <TouchableOpacity className="bg-primary h-[40px] flex justify-center items-center rounded-md">
                            <Text className="text-white font-bold">Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row gap-x-1">
                        <Text>Não possui uma conta?</Text>
                        <Link className="text-primary" href="/menu">Cadastro</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;