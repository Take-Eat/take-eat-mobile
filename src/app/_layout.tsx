import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Inter": require("@/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
        "Inter-Italic": require("@/src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
        "Oregano-Italic": require("@/src/assets/fonts/Oregano-Italic.ttf"),
        "Oregano": require("@/src/assets/fonts/Oregano-Regular.ttf")
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}