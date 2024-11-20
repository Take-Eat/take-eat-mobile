import { View, ScrollView, Dimensions } from "react-native";
import { Container, FormCommon, FormSection } from "@components"
import { isValidCNH, isValidCPF } from "@/src/utils/validations";
import { z } from "zod";
import { useFormContext } from "@/src/context/FormContext";


const formSchema = z.object({
    name: z.string({ message: "Campo obrigatório" }),
    cpf: z.string({ message: "Campo obrigatório" }).refine(isValidCPF, "CPF inválido"),
    cnh: z.string({ message: "Campo obrigatório" }).refine(isValidCNH, "CNH inválida"),
    address: z.string({ message: "Campo obrigatório" }),
})

type iFormSchema = z.infer<typeof formSchema>

export default function Entregador() {
    const { updateFormData } = useFormContext()

    const fields = [
        { label: "Nome", key: "name" },
        { label: "CPF", key: "cpf" },
        { label: "CNH", key: "cnh" },
        { label: "Endereço", key: "address" },
    ];

    const submit = (data: iFormSchema) => {
        updateFormData(data)
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