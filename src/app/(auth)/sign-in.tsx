import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useState } from "react";



const SignIn = () => {
    const [form, setForm] = useState<{ email: string, password: string }>({
        email: "",
        password: "",
    });

    const submit = () => {
        console.log(form)
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center h-full px-4 my-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        // source={}
                        resizeMode="contain"
                        className="w-[115px] h-[34px]"
                    />

                    <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
                        Log in
                    </Text>

                    <input
                        title="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                        title="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <button
                        title="Sign In"
                        onClick={submit}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;