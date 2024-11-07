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
                name="index"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};
