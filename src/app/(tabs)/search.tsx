import {
  SearchBar,
  Section,
  TrendingFoods,
  Donors,
  TabLayoutWithOutHeader
} from "@components";
import { useState } from "react";
import CustomBottomSheet from "@/src/components/bottomSheet";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CheckBox from "@/src/components/checkBox";
import { globalStyles } from "@/src/assets/styles/Global";

export default function Search() {
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
      <TabLayoutWithOutHeader>
        <SearchBar handleOpen={handleOpenBottomSheet} />

        <Section
          name="Prioritários"
          size={globalStyles.heading2}
          lable="Ver mais"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />
        <TrendingFoods />

        <Section
          name="Doadores fodásticos"
          size={globalStyles.heading2}
          lable="Ver mais"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />
        <Donors />
      </TabLayoutWithOutHeader>
      <CustomBottomSheet isVisible={isVisible} onClose={handleCloseBottomSheet}>
        <View className="flex-1">
          <View className="w-full bottom-4 flex flex-row justify-between">
            <FontAwesome name="sort-amount-desc" size={25} />

            <Text style={globalStyles.heading1}>Filtros</Text>

            <FontAwesome name="trash" size={25} />
          </View>

          <View className="py-5">
            <CheckBox />
          </View>

          <Button
            title="Aplicar"
            onPress={handleCloseBottomSheet}
            color={"#FF9F1C"}
          />
        </View>
      </CustomBottomSheet>
    </GestureHandlerRootView>
  );
}
