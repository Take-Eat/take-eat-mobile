import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, CustomButton, FormInput } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function Doador() {

    const params = useLocalSearchParams()

    const [form, setForm] = useState<{ name: string, cnpj: string, address: string, ramoAlimenticio: string, horarioRetirada: string }>({
        name: "",
        cnpj: "",
        address: "",
        ramoAlimenticio: "",
        horarioRetirada: ""

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
                            title="Nome ou Razão Social"
                            value={form.name}
                            handleChangeText={(e) => setForm({ ...form, name: e })}
                        />
                        <FormInput
                            title="CNPJ"
                            value={form.cnpj}
                            handleChangeText={(e) => setForm({ ...form, cnpj: e })}
                            keyboardType="email-address"
                        />
                        <FormInput
                            title="Endereço"
                            value={form.address}
                            handleChangeText={(e) => setForm({ ...form, address: e })}
                            keyboardType="numeric"
                        />
                        <FormInput
                            title="Ramo Alimentício"
                            value={form.ramoAlimenticio}
                            handleChangeText={(e) => setForm({ ...form, ramoAlimenticio: e })}
                            keyboardType="numeric"
                        />
                        <FormInput
                            title="Horário para Retirada de Alimentos"
                            value={form.horarioRetirada}
                            handleChangeText={(e) => setForm({ ...form, horarioRetirada: e })}
                            keyboardType="numeric"
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