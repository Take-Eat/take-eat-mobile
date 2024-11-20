import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { Container, FormCommon, FormSection } from "@components";
import { z } from "zod";
import { useFormContext } from "@/src/context/FormContext";
import { useAuth } from "@/src/context/AuthContext";

const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cnpj: z.string({ message: "Campo obrigatório" })
    // .refine(isValidCNPJ, "CPNJ inválido")
    ,
    address: z.string({ message: "Campo obrigatório" })
})

type iFormSchema = z.infer<typeof formSchema>

export default function ApoiadorDistribuidor() {
    const { register } = useAuth()

    const { formData, updateFormData } = useFormContext()

    const fields = [
        { label: "Nome ou Razão Social", key: "name" },
        { label: "CNPJ", key: "cnpj" },
        { label: "Endereço", key: "address" }
    ];

    const submit = (data: iFormSchema) => {
        updateFormData(data)
        register({ ...data, ...formData })
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
