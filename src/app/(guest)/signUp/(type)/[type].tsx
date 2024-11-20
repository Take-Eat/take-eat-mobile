import { View, ScrollView, Dimensions } from "react-native";
import { useState } from "react";
import { RelativePathString, useLocalSearchParams, useRouter } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
import { z } from "zod";


const formSchema = z.object({
    username: z.string({ message: "Campo obrigatório" }).min(3, "O username deve ter no mínimo 3 caracteres").max(55, "O username deve ter no máximo 55 caracteres"),
    email: z.string({ message: "Campo obrigatório" }).email("E-mail inválido"),
    phone: z.string({ message: "Campo obrigatório" }).regex(/^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/, "Número de telefone inválido"),
    password: z.string({ message: "Campo obrigatório" }).min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string({ message: "Campo obrigatório" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // O erro será associado ao campo `confirmPassword`
});


export default function SignUpType() {
    const router = useRouter()

    const fields = [
        { label: "Username", key: "username" },
        { label: "E-mail", key: "email" },
        { label: "Telefone", key: "phone" },
        { label: "Senha", key: "password" },
        { label: "Confirmar Senha", key: "confirmPassword" }
    ];

    const { type } = useLocalSearchParams()

    const submit = () => (data: any) => {
        console.log(data)

        let nextPath = "";
        if (type == "apoiador" || type == "distribuidor") {
            nextPath = "/(guest)/signUp/(type)/form/apoiador_distribuidor";
        } else if (type == "doador") {
            nextPath = "/(guest)/signUp/(type)/form/doador";
        } else if (type == "entregador") {
            nextPath = "/(guest)/signUp/(type)/form/entregador";
        }
        router.push({ pathname: nextPath as RelativePathString });
    };

    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection
                            buttonText="Continuar"
                            schema={formSchema}
                            fields={fields}
                            onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
};