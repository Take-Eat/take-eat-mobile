import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function SignIn() {
    const [form, setForm] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    });

    const submit = () => {
        console.log(form)
    }

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
                    <View className="flex w-full gap-2">
                        <FormInput
                            title="E-mail"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            keyboardType="email-address"
                        />
                        <FormInput
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            keyboardType="password"
                        />

                        <CustomButton
                            title="Login"
                            handlePress={submit}
                        />
                    </View>
                    <View className="flex flex-row">
                        <Text style={globalStyles.textRegular}>Não possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/(auth)/sign-up">Cadastro</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
};