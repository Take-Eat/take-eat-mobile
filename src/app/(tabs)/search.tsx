import { SearchBar } from "@/src/components/search";
import { Section } from "@/src/components/section";
import { TrendingFoods } from "@/src/components/trending";
import { Donors } from "@/src/components/donors";
import TabLayout from "@components/tabLayout";
import { useState } from "react";
import CustomBottomSheet from "@/src/components/bottomSheet";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Search() {
  const [isVisible, setIsVisible] = useState(false); // Controla a visibilidade do BottomSheet

  // Função para abrir o BottomSheet
  const handleOpenBottomSheet = () => {
    setIsVisible(true); // Define o BottomSheet como visível
    console.log("TESTE");
  };

  // Função para fechar o BottomSheet
  const handleCloseBottomSheet = () => {
    setIsVisible(false); // Fecha o BottomSheet
  };
  return (
    <TabLayout>
      <SearchBar handleOpen={handleOpenBottomSheet} />

      <Section
        name="Mais procurados"
        size="text-2xl"
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />
      <TrendingFoods />

      <Section
        name="Doadores fodásticos"
        size="text-2xl"
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />
      <Donors />
      <CustomBottomSheet isVisible={isVisible} onClose={handleCloseBottomSheet}>
        <View>
          <Feather name="airplay" size={50} />
          <Text>AAAAAA</Text>
        </View>
      </CustomBottomSheet>
    </TabLayout>
  );
}
