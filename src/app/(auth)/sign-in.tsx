import { View, ScrollView, Dimensions } from "react-native";
import { useState } from "react";
import { Container, FormCommon, FormSection } from "@components"


export default function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const fields = [
        { label: "E-mail", key: "email" },
        { label: "Senha", key: "password" }
    ];

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const submit = () => {
        console.log(form)
    }


    return (
        <ScrollView>
            <Container>
                <View style={{ minHeight: Dimensions.get("window").height }}>
                    <FormCommon footerLogin>
                        <FormSection buttonText="Login" formData={form} handleChange={handleChange} fields={fields} onSubmit={submit} />
                    </FormCommon>
                </View>
            </Container>
        </ScrollView>
    );
};