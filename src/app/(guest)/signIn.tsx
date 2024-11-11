import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useContext, useState } from "react";
import { Link } from "expo-router";
import { AuthContext, useAuth } from "@/src/context/AuthContext";
import { Container, CustomButton, FormInput } from "@components";
import { globalStyles } from "@/src/assets/styles/Global";

export default function Index() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const { login, setUserType } = useAuth();


  const submit = () => {
    login(form.email, form.password)
    console.log("aaaa")

  };

  return (
    <ScrollView>
      <Container>
        <View
          className="w-ful flex justify-around items-center px-7"
          style={{
            minHeight: Dimensions.get("window").height,
          }}
        >
          <Image
            source={require("@/src/assets/images/logo_take_eat_plate.png")}
            resizeMode="contain"
            className="w-[135px]"
          />
          <View className="flex w-full gap-3">
            <FormInput
              title="E-mail"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
            <FormInput
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              keyboardType="password"
            />

            <CustomButton title="Login" handlePress={submit} />
          </View>
          <View className="flex flex-row gap-x-1">
            <Text style={globalStyles.textRegular}>Não possui uma conta?</Text>
            <Link
              className="text-primary"
              style={globalStyles.heading3}
              href="/menu"
            >
              Cadastro
            </Link>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}
