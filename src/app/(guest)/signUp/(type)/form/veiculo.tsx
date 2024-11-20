import { View, ScrollView, Dimensions } from "react-native";
import { Container, FormCommon, FormSection } from "@components"
import { isValidCarPlate } from "@/src/utils/validations";
import { z } from "zod";
import { useAuth } from "@/src/context/AuthContext";
import { useFormContext } from "@/src/context/FormContext";

const formSchema = z.object({
    type: z.string({ message: "Campo obrigatório" }),
    placa: z.string({ message: "Campo obrigatório" }).refine(isValidCarPlate, "Placa inválida")
})

type iFormSchema = z.infer<typeof formSchema>

export default function Veiculo() {
    const { register } = useAuth()

    const { formData, updateFormData } = useFormContext()

    const fields = [
        { label: "Tipo de Veículo", key: "type" },
        { label: "Placa", key: "placa" },
    ];

    const submit = (data: iFormSchema) => {
        updateFormData(data);
        register({ ...data, ...formData })
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