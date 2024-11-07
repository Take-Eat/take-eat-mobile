import React, { useState } from "react";
import { ScrollView, View, Dimensions, Image, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components";
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
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
}
