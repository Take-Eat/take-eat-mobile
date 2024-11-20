import React, { useState } from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components";
import { isValidCNPJ } from "@/src/utils/validations";
import { z } from "zod";

const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cnpj: z.string({ message: "Campo obrigatório" }).refine(isValidCNPJ, "CPNJ inválido"),
    address: z.string({ message: "Campo obrigatório" })
})

export default function ApoiadorDistribuidor() {
    const params = useLocalSearchParams()

    const fields = [
        { label: "Nome ou Razão Social", key: "name" },
        { label: "CNPJ", key: "cnpj" },
        { label: "Endereço", key: "address" }
    ];

    const submit = (data: any) => {
        console.log(data);
    };

    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection schema={formSchema} fields={fields} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
}
