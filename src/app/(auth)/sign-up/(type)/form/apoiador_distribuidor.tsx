import React, { useState } from "react";
import { ScrollView, View, Dimensions, Image, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormSection } from "@components";
import { globalStyles } from "@/src/assets/styles/Global";

export default function ApoiadorDistribuidor() {
    const params = useLocalSearchParams()

    const [form, setForm] = useState({ ...params, name: "", cnpj: "", address: "" });

    const fields = [
        { label: "Nome ou Razão Social", key: "name" },
        { label: "CNPJ", key: "cnpj" },
        { label: "Endereço", key: "address" }
    ];

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const submit = () => {
        console.log(form);
    };

    return (
        <ScrollView>
            <Container>
                <View
                    className="w-full flex justify-around items-center px-7"
                    style={{ minHeight: Dimensions.get("window").height }}
                >
                    <Image
                        source={require("@/src/assets/images/logo_take_eat_plate.png")}
                        resizeMode="contain"
                        className="w-[135px]"
                    />
                    <FormSection formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    <View className="flex flex-row gap-x-1">
                        <Text style={globalStyles.textRegular}>Já possui uma conta?</Text>
                        <Link className="text-primary" style={globalStyles.heading3} href="/sign-up">Login</Link>
                    </View>
                </View>
            </Container>
        </ScrollView>
    );
}
