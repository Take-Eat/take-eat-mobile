import React, { useState } from "react";
import { ScrollView, View, Dimensions, Image, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components";
import { globalStyles } from "@/src/assets/styles/Global";
import { isValidCNPJ } from "@/src/utils/validations";
import { z } from "zod";


const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cnpj: z.string({ message: "Campo obrigatório" }).refine(isValidCNPJ, "CPNJ inválido"),
    address: z.string({ message: "Campo obrigatório" }),
    ramoAlimenticio: z.string({ message: "Campo obrigatório" }),
    // Pensar em um padrão de string que informa dia e hora de retirada
    horarioRetirada: z.string({ message: "Campo obrigatório" }),
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
