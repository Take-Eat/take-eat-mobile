import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function Entregador() {
    const params = useLocalSearchParams()

    const router = useRouter()

    const [form, setForm] = useState({
        ...params,
        name: "",
        cnpj: "",
        address: "",
        ramoAlimenticio: "",
        horarioRetirada: ""
    });

    const fields = [
        { label: "Nome", key: "name" },
        { label: "CPF", key: "cpf" },
        { label: "CNH", key: "cnh" },
        { label: "Endereço", key: "address" },
    ];

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const submit = () => {
        console.log(form);
        router.push({
            pathname: "/(auth)/sign-up/(type)/form/veiculo",
            params: { ...form, ...params }
        })
    };


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
                    <FormSection buttonText="Continuar" formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    <View className="flex flex-row gap-x-1">
                        <Text style={globalStyles.textRegular}>Já possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/sign-up">Login</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
};