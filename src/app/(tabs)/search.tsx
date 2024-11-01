import {
  SearchBar,
  Section,
  TrendingFoods,
  Donors,
  TabLayoutWithOutHeader,
  CustomButton
} from "@components";
import { useState } from "react";
import CustomBottomSheet from "@/src/components/bottomSheet";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CheckBox from "@/src/components/checkBox";
import { globalStyles } from "@/src/assets/styles/Global";
import BottomSheetContainer from "@/src/components/bottomSheetContainer";

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

  // Funções de gerenciamento de filtros
  const [checkBox, setCheckBox] = useState<number[]>([]);

  const clearAllSelections = () => {
    setCheckBox([]); // Reseta o estado checkBox para um array vazio
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
        <BottomSheetContainer
          customHeader={
            <View className="w-full flex flex-row justify-between">
              <FontAwesome name="sort-amount-desc" size={25} />

              <Text style={globalStyles.heading1}>Filtros</Text>

              <FontAwesome onPress={clearAllSelections} name="trash" size={25} />
            </View>
          }>

          <View className="py-5">
            <CheckBox checkBox={checkBox} setCheckBox={setCheckBox} />
            <CustomButton
              title="Aplicar"
              handlePress={handleCloseBottomSheet}
            />
          </View>
        </BottomSheetContainer>
      </CustomBottomSheet>
    </GestureHandlerRootView>
  );
}

