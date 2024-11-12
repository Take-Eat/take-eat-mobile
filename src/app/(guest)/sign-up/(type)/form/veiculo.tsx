import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Container, FormCommon, FormSection } from "@components"
import { globalStyles } from "@/src/assets/styles/Global";


export default function Veiculo() {
    const params = useLocalSearchParams()

    const [form, setForm] = useState({
        ...params,
        type: "",
        placa: ""
    });

    const fields = [
        { label: "Tipo de Veículo", key: "type" },
        { label: "Placa", key: "placa" },
    ];

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const submit = () => {
        console.log(form);
    };


    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon>
                        <FormSection formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
};