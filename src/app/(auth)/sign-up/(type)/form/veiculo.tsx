import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function Veiculo() {

    const params = useLocalSearchParams()

    const [form, setForm] = useState<{ type: string, placa: string }>({
        type: "",
        placa: ""
    });

    const submit = () => {
        console.log(form)
        console.log(params)
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
                            title="Tipo de Veículo"
                            value={form.type}
                            handleChangeText={(e) => setForm({ ...form, type: e })}
                        />
                        <FormInput
                            title="Placa"
                            value={form.placa}
                            handleChangeText={(e) => setForm({ ...form, placa: e })}
                            keyboardType="email-address"
                        />

                        <CustomButton
                            title="Registrar"
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