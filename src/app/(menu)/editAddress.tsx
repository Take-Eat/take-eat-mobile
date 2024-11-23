import { globalStyles } from "@/src/assets/styles/Global";
import { Container, CustomButton, FormInput } from "@/src/components";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";


export default function EditAddress() {
    const [noNum, setNoNum] = useState<boolean>(false)

    const [form, setForm] = useState<{ address: string, neighborhood: string, cep: string, num: string, additional: string, ref: string, name: string }>({
        address: "",
        neighborhood: "",
        cep: "",
        num: "",
        additional: "",
        ref: "",
        name: "",
    });

    const submit = () => {
        console.log(form)
    }


    return (
        <ScrollView>
            <Container>
                <Text style={globalStyles.heading1} className="text-center">
                    Editar Endereço
                </Text>
                <View className="flex flex-wrap flex-row justify-between gap-2 pt-3 pb-2">
                    <FormInput
                        otherStyles="w-full"
                        title="Endereço"
                        value={form.address}
                        handleChangeText={(e) => setForm({ ...form, address: e })}
                        placeholder="Rua, avenida, logradouro, etc..."
                        keyboardType="default"
                        editable={true} />
                    <FormInput
                        otherStyles="w-[58%]"
                        title="Bairro"
                        value={form.neighborhood}
                        handleChangeText={(e) => setForm({ ...form, neighborhood: e })}
                        placeholder="Bairro da residência..."
                        keyboardType="default"
                        editable={true} />
                    <FormInput
                        otherStyles="w-[38%]"
                        title="Cep"
                        value={form.cep}
                        handleChangeText={(e) => setForm({ ...form, cep: e })}
                        placeholder="00.000-000"
                        keyboardType="default"
                        editable={true} />
                    <View
                        className="w-[38%]"
                    >
                        <FormInput
                            title="Número"
                            value={form.num}
                            handleChangeText={(e) => setForm({ ...form, num: e })}
                            placeholder="Número..."
                            keyboardType="default"
                            editable={!noNum}
                        />
                        <View className="flex flex-row gap-2 items-center mt-1 pl-2 ">
                            <TouchableOpacity
                                className="w-[20px]"
                                onPress={() => setNoNum(!noNum)}>
                                <Fontisto
                                    name={
                                        noNum
                                            ? "checkbox-active"
                                            : "checkbox-passive"
                                    }
                                    size={20}
                                    color="#FF9F1C"
                                />
                            </TouchableOpacity>
                            <Text style={globalStyles.textRegular}>Sem número</Text>
                        </View>
                    </View>
                    <FormInput
                        otherStyles="w-[58%]"
                        title="Complemento"
                        value={form.additional}
                        handleChangeText={(e) => setForm({ ...form, additional: e })}
                        placeholder="Casa, apartamento, etc..."
                        keyboardType="default"
                        editable={true} />
                    <FormInput
                        otherStyles="w-full"
                        title="Ponto de referência"
                        value={form.ref}
                        handleChangeText={(e) => setForm({ ...form, ref: e })}
                        placeholder="Próximo à etc..."
                        keyboardType="default"
                        editable={true} />
                    <FormInput
                        otherStyles="w-full"
                        title="Nome para o endereço"
                        value={form.name}
                        handleChangeText={(e) => setForm({ ...form, name: e })}
                        placeholder="Nome para identificar esse endereço..."
                        keyboardType="default"
                        editable={true} />
                </View>
                <CustomButton title="Confirmar" handlePress={submit} />
            </Container>
        </ScrollView >
    )
}