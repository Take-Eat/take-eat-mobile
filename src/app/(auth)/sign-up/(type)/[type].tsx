import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


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