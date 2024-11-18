import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";
import { z } from "zod";

const formSchema = z.object({
    type: z.string(),
    placa: z.string()
})

export default function Veiculo() {
    const params = useLocalSearchParams()

    const fields = [
        { label: "Tipo de Veículo", key: "type" },
        { label: "Placa", key: "placa" },
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
};