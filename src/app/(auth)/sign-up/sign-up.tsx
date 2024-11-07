import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function SignUp() {
    const [form, setForm] = useState<{ username: string, email: string, phone: string, password: string, confirm_password: string }>({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    });

    const submit = () => {
        console.log(form)
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
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                        />
                        <FormInput
                            title="E-mail"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            keyboardType="email-address"
                        />
                        <FormInput
                            title="Phone"
                            value={form.phone}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
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
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            keyboardType="password"
                        />

                        <CustomButton
                            title="Continuar"
                            handlePress={submit}
                        />
                    </View>
                    <View className="flex flex-row gap-x-1">
                        <Text style={globalStyles.textRegular}>Já possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/(auth)/sign-in">Login</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
};