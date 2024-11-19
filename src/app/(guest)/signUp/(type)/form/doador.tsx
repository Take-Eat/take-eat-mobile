import React, { useState } from "react";
import { ScrollView, View, Dimensions, Image, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components";
import { globalStyles } from "@/src/assets/styles/Global";
import { z } from "zod";


const formSchema = z.object({
    name: z.string(),
    cnpj: z.string(),
    address: z.string(),
    ramoAlimenticio: z.string(),
    horarioRetirada: z.string(),
})

export default function Doador() {
    const params = useLocalSearchParams()


    const fields = [
        { label: "Nome ou Razão Social", key: "name" },
        { label: "CNPJ", key: "cnpj" },
        { label: "Endereço", key: "address" },
        { label: "Ramo Alimentício", key: "ramoAlimenticio" },
        { label: "Horário para Retirada", key: "horarioRetirada" }
    ];


    const submit = (data: any) => {
        console.log(data);
    };

    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection fields={fields} schema={formSchema} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
}
