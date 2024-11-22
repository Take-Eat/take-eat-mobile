import { useAuth } from "@/src/context/AuthContext";
import { FlatList, GestureResponderEvent, SafeAreaView, Text } from "react-native";
import { z } from "zod";
import FormInput from "../formInput";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "../customButton";

const userSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
    // Opcionais referentes a cada perfil de usuário
    razaoSocial: z.string().optional().nullable(),
    cnpj: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    cnh: z.string().optional().nullable(),
    cpf: z.string().optional().nullable(),
    ramoAlimenticio: z.string().optional().nullable(),
    horarioRetirada: z.string().optional().nullable(),
})

export default function DataUpdate({ }) {
    const { user, update } = useAuth()

    const userParsed = userSchema.parse(user),
        arrayUserParsed = Object.entries(userParsed).map(([key, value]) => ({ key, value }))

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data)
        update(data)
    }

    return (
        <SafeAreaView className="min-h-full ">
            {arrayUserParsed.map((formField) => {
                const { field } = useController({
                    control,
                    name: formField.key,
                    defaultValue: formField.value
                });
                return (
                    <FormInput
                        key={formField.key}
                        name={formField.key}
                        title={formField.key}
                        value={field.value}
                        handleChangeText={field.onChange}
                    />
                );
            })}
            <CustomButton
                title={"Salvar"}
                handlePress={handleSubmit(onSubmit)}
                containerStyles={"mt-2"} />
        </SafeAreaView>
    )
}