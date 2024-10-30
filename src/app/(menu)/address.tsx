import { Card, Container, InputSearch } from "@/src/components";
import CustomBottomSheet from "@/src/components/bottomSheet";
import CheckBox from "@/src/components/checkBox";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export default function Address() {
  const [isVisible, setIsVisible] = useState(false); // Controla a visibilidade do BottomSheet

  // Função para abrir o BottomSheet
  const handleOpenBottomSheet = () => {
    setIsVisible(true); // Define o BottomSheet como visível
  };

  // Função para fechar o BottomSheet
  const handleCloseBottomSheet = () => {
    setIsVisible(false); // Fecha o BottomSheet
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container>
        {/* <View className="w-full md:h-60 mt-3 flex flex-row items-center h-14 px-2 gap-4">
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
        </View> */}
        <View className="gap-4">
          <Link href={"/(menu)/map"}>
            <Card bgColor="bg-gray-700" height="h-20">
              <View className="flex-row items-center gap-4">
                <FontAwesome6
                  name="map-location-dot"
                  size={25}
                  color="#F58F00"
                />
                <Text className="text-lg font-semibold">
                  Usar localização atual
                </Text>
              </View>
            </Card>
          </Link>

          <Card bgColor="bg-gray-700" height="h-24">
            <View className="flex-row items-center gap-3">
              <MaterialCommunityIcons name="home" size={30} color="#F58F00" />

              <View className="w-72">
                <Text numberOfLines={2} className="w-64 text-base font-normal">
                  Rua Domingos Olímpio, 123 - Centro, Sobral - CE
                </Text>

                <Text numberOfLines={2} className="w-64 text-sm">
                  Perto do cabaré do Pirosca
                </Text>
              </View>
            </View>
            <Pressable onPress={handleOpenBottomSheet}>
              <Entypo name="dots-three-vertical" size={20} color="#F58F00" />
            </Pressable>
          </Card>
        </View>
      </Container>
      <CustomBottomSheet isVisible={isVisible} onClose={handleCloseBottomSheet}>
        <View className="flex-1">
          <View className="w-full bottom-4 flex flex-row justify-between">
            <Text className="text-black text-2xl font-semibold">
              Rua Domingos Olímpio, 123 - Centro, Sobral - CE
            </Text>
          </View>

          <View className="h-36 py-5 w-full flex-row gap-10 justify-center items-center">
            <Pressable
              className="bg-alert w-36 h-16 flex-row gap-3 justify-center items-center"
              onPress={() => {
                console.log("CLICOU NO EXCLUIR");
              }}
            >
              <Feather name="trash" size={20} color={"#FFF"} />

              <Text className="text-white text-lg">Excluir</Text>
            </Pressable>

            <Pressable className="bg-primary w-36 h-16 flex-row gap-3 justify-center items-center">
              <SimpleLineIcons name="pencil" size={20} color={"#FFF"} />

              <Link href={"/(menu)/map"} className="text-white text-lg">
                Editar
              </Link>
            </Pressable>
          </View>

          <Pressable onPress={handleCloseBottomSheet}>
            <Text className="text-primary w-full text-center text-lg">
              Sair
            </Text>
          </Pressable>
        </View>
      </CustomBottomSheet>
    </GestureHandlerRootView>
  );
}
