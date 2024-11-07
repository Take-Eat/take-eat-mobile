import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function Entregador() {

    const params = useLocalSearchParams()

    const router = useRouter()

    const [form, setForm] = useState<{ name: string, cpf: string, cnh: string, address: string }>({
        name: "",
        cpf: "",
        cnh: "",
        address: "",
    });

    const submit = () => {
        console.log(form)
        console.log(params)
        router.push({
            pathname: "/(auth)/sign-up/(type)/form/veiculo",
            params: { ...form, ...params }
        })
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
                            title="Nome"
                            value={form.name}
                            handleChangeText={(e) => setForm({ ...form, name: e })}
                        />
                        <FormInput
                            title="CPF"
                            value={form.cpf}
                            handleChangeText={(e) => setForm({ ...form, cpf: e })}
                        />
                        <FormInput
                            title="CNH"
                            value={form.cnh}
                            handleChangeText={(e) => setForm({ ...form, cnh: e })}
                        />
                        <FormInput
                            title="Endereço"
                            value={form.address}
                            handleChangeText={(e) => setForm({ ...form, address: e })}
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