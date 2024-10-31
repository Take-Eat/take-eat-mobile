import { globalStyles } from "@/src/assets/styles/Global";
import { Card, Container, CustomButton } from "@/src/components";
import CustomBottomSheet from "@/src/components/bottomSheet";
import BottomSheetContainer from "@/src/components/bottomSheetContainer";
import {
  Entypo,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
          <TouchableOpacity
            className="w-full"
            onPress={() => router.push('/(menu)/map')}
          >
            <Card bgColor="bg-gray-700">
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
          </TouchableOpacity>

          <Card bgColor="bg-gray-700">
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
      </Container >
      <CustomBottomSheet isVisible={isVisible} onClose={handleCloseBottomSheet}>
        <BottomSheetContainer title="Endereço">
          <View className="py-5">
            <Card
              bgColor="bg-gray-700"
            >
              <Text style={globalStyles.textRegular}>Rua Domingos Olímpio, 123 - Centro, Sobral - CE</Text>
            </Card>
            <View className="flex-row justify-between gap-5 py-5">
              <CustomButton title="Editar" containerStyles="flex-1" handlePress={() => router.push('/(menu)/editAddress')} />
              <CustomButton title="Excluir" containerStyles="flex-1 border border-secondary bg-white" textStyles="text-secondary" handlePress={() => console.log("CLICASTES EM EXCLUIR")} />
            </View>
          </View>
        </BottomSheetContainer>
      </CustomBottomSheet>
    </GestureHandlerRootView >
  );
}
