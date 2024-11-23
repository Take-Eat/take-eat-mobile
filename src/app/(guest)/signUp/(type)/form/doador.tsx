import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import { Container, FormCommon, FormSection } from "@components";
import { isValidCNPJ } from "@/src/utils/validations";
import { z } from "zod";
import { useAuth } from "@/src/context/AuthContext";
import { useFormContext } from "@/src/context/FormContext";


const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cnpj: z.string({ message: "Campo obrigatório" }).refine(isValidCNPJ, "CPNJ inválido"),
    address: z.string({ message: "Campo obrigatório" }),
    ramoAlimenticio: z.string({ message: "Campo obrigatório" }),
    // Pensar em um padrão de string que informa dia e hora de retirada
    horarioRetirada: z.string({ message: "Campo obrigatório" }),
})

type iFormSchema = z.infer<typeof formSchema>

export default function Doador() {
    const { register } = useAuth()

    const { formData, updateFormData } = useFormContext()

    const fields = [
        { label: "Nome ou Razão Social", key: "name" },
        { label: "CNPJ", key: "cnpj" },
        { label: "Endereço", key: "address" },
        { label: "Ramo Alimentício", key: "ramoAlimenticio" },
        { label: "Horário para Retirada", key: "horarioRetirada" }
    ];


    const submit = (data: iFormSchema) => {
        updateFormData(data)
        register({ ...data, ...formData })
    };

    return (
        <ScrollView>
            {/* <Container> */}
            <View style={{ minHeight: Dimensions.get("window").height }}>
                <FormCommon>
                    <FormSection fields={fields} schema={formSchema} onSubmit={submit} />
                </FormCommon>
            </View>
            {/* </Container> */}
        </ScrollView>
    );
}
