import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";
import { z } from "zod";


const formSchema = z.object({
    name: z.string(),
    cpf: z.string(),
    cnh: z.string(),
    address: z.string(),
})

export default function Entregador() {
    const params = useLocalSearchParams()


    const fields = [
        { label: "Nome", key: "name" },
        { label: "CPF", key: "cpf" },
        { label: "CNH", key: "cnh" },
        { label: "Endereço", key: "address" },
    ];


    const submit = (data: any) => {
        console.log(data)
    };


    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection buttonText="Continuar" fields={fields} schema={formSchema} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
};