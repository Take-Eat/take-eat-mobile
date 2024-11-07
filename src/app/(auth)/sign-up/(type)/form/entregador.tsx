import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
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
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection buttonText="Continuar" formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
};