import { Container, InputSearch } from "@/src/components";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export default function Address() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container>
        <View className="w-full md:h-60 mt-3 flex flex-row items-center h-14 px-2 gap-4">
          <InputSearch
            bgColor="bg-gray-600"
            textColor="text-black"
            title="Endereço e número"
          />
          <Pressable
            onPress={() => {
              console.log("CLICOU NO PESQUISAR");
            }}
          >
            <Feather name="search" size={30} color="#F58F00" />
          </Pressable>
        </View>

        <View className="mt-3 w-full h-20 justify-center items-center">
          <Link href={"/(menu)/map"} className="text-2xl font-bold">
            Ir para Mapa
          </Link>
        </View>
      </Container>
    </GestureHandlerRootView>
  );
}
