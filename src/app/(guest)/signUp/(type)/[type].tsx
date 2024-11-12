import { View, ScrollView, Dimensions } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"


export default function SignUpType() {
    const router = useRouter()

    const [form, setForm] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: ""
    });

    const fields = [
        { label: "Username", key: "username" },
        { label: "E-mail", key: "email" },
        { label: "Telefone", key: "phone" },
        { label: "Senha", key: "password" },
        { label: "Confirmar Senha", key: "confirm_password" }
    ];

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const { type } = useLocalSearchParams()

    const submit = () => {
        let nextPath = "";
        if (type == "apoiador" || type == "distribuidor") {
            nextPath = "/(auth)/sign-up/(type)/form/apoiador_distribuidor";
        } else if (type == "doador") {
            nextPath = "/(auth)/sign-up/(type)/form/doador";
        } else if (type == "entregador") {
            nextPath = "/(auth)/sign-up/(type)/form/entregador";
        }
        router.push({ pathname: nextPath, params: form });
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