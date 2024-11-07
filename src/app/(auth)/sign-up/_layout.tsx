import { Stack } from "expo-router";

export default function SignUpLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(type)/[type]"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(type)/form/apoiador_distribuidor"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(type)/form/doador"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(type)/form/entregador"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(type)/form/veiculo"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};
