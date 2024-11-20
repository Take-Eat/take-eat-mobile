import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";
import { isValidCNH, isValidCPF } from "@/src/utils/validations";
import { z } from "zod";


const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cpf: z.string({ message: "Campo obrigatório" }).refine(isValidCPF, "CPF inválido"),
    cnh: z.string({ message: "Campo obrigatório" }).refine(isValidCNH, "CNH inválida"),
    address: z.string({ message: "Campo obrigatório" }),
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