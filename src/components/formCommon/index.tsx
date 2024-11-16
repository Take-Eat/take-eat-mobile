import { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "@/src/assets/styles/Global";

interface FormCommonProps {
    children: ReactNode;
    footerLogin?: boolean
}

export default function FormCommon({ children, footerLogin }: FormCommonProps) {
    return (
        <View className="w-full h-full flex justify-around items-center px-7">
            <Image
                source={require("@/src/assets/images/logo_take_eat_plate.png")}
                resizeMode="contain"
                className="w-[135px]"
            />

            {children}

            <View className="flex flex-row gap-x-1">
                <Text style={globalStyles.textRegular}>{footerLogin ? "Não" : "Já"} possui uma conta?</Text>
                <Link className="text-primary" style={globalStyles.heading3} href={`/${footerLogin ? "signUp" : "signIn"}`}>{footerLogin ? "Cadastro" : "Login"}</Link>
            </View>
        </View>
    );
}
