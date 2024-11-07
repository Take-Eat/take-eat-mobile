import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function SignUpType() {
    const router = useRouter()

    const [form, setForm] = useState<{ username: string, email: string, phone: string, password: string, confirm_password: string }>({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    });

    const { type } = useLocalSearchParams()

    const submit = () => {
        if (type == "apoiador" || type == "distribuidor") {
            router.push({
                pathname: "/(auth)/sign-up/(type)/form/apoiador_distribuidor",
                params: form
            })
        }
        else if (type == "doador") {
            router.push({
                pathname: "/(auth)/sign-up/(type)/form/doador",
                params: form
            })
        }
        else if (type == "entregador") {
            router.push({
                pathname: "/(auth)/sign-up/(type)/form/entregador",
                params: form
            })
        }
    }

    return (
        <ScrollView>
            <Container>

                <View
                    className="w-ful flex justify-around items-center px-7"
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
                            title="Username"
                            value={form.username}
                            handleChangeText={(e) => setForm({ ...form, username: e })}
                        />
                        <FormInput
                            title="E-mail"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            keyboardType="email-address"
                        />
                        <FormInput
                            title="Phone"
                            value={form.phone}
                            handleChangeText={(e) => setForm({ ...form, phone: e })}
                            keyboardType="numeric"
                        />
                        <FormInput
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            keyboardType="password"
                        />
                        <FormInput
                            title="Confirm Password"
                            value={form.confirm_password}
                            handleChangeText={(e) => setForm({ ...form, confirm_password: e })}
                            keyboardType="password"
                        />

                        <CustomButton
                            title="Continuar"
                            handlePress={submit}
                        />
                    </View>
                    <View className="flex flex-row gap-x-1">
                        <Text style={globalStyles.textRegular}>Já possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/sign-up">Login</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
};