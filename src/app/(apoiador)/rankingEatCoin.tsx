import { globalStyles } from "@/src/assets/styles/Global";
import { SearchBar, TabLayoutWithOutHeader } from "@components";
import { FlatList, Image, Text, View } from "react-native";
import EatCoinSvg from "@/src/assets/images/EatCoin.svg";
import EatCoin1Svg from "@/src/assets/images/eatCoin1.svg";
import EatCoin2Svg from "@/src/assets/images/eatCoin2.svg";
import EatCoin3Svg from "@/src/assets/images/eatCoin3.svg";
import { useEffect, useState } from "react";

interface DonorProps {
  id: string;
  name: string;
  image: string;
  coins: number;
}

export default function RankingEatCoin() {
  // Estado para armazenar a lista de doadores
  const [donor, setDonor] = useState<DonorProps[]>([]);

  /**
   * Hook de efeito para buscar os dados dos doadores na API.
   * A URL usa a variável de ambiente `EXPO_PUBLIC_API_MOCK`.
   */
  useEffect(() => {
    async function getDonor() {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_MOCK}/restaurants`
      );
      const data = await response.json();
      setDonor(
        data.map((d: DonorProps, index: number) => ({
          ...d,
          coins: Math.floor(Math.random() * 500), // Simulação de Eat Coins
        }))
      );
    }
    getDonor();
  }, []);

  return (
    <TabLayoutWithOutHeader>
      <View className="flex-1 items-center">
        {/* Titulo da tela */}
        <Text style={globalStyles.heading1}>Ranking de Doações</Text>

        {/* Barra de pesquisa de apoiadores */}
        <SearchBar />

        {/* Lista de apoiadores */}
        <FlatList
          data={donor.sort((a, b) => b.coins - a.coins)} // Ordenar pela quantidade de coins
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
          renderItem={({ item, index }) => (
            <View
              className="flex-row items-center justify-between p-7 gap-5 mb-5 bg-white shadow-black"
              style={[
                {
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                },
                globalStyles.roundedRegular,
              ]}
            >
              {/* Posição e Avatar */}
              <View className="flex-row items-center">
                <Text
                  style={[
                    globalStyles.heading2,
                    {
                      color: index === 0 ? "#FFD700" : "#A0A0A0",
                      fontWeight: "bold",
                      marginRight: 12,
                    },
                  ]}
                >
                  {index + 1}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16 mr-3"
                  style={globalStyles.roundedFull}
                />
                <Text style={[globalStyles.heading2, { color: "#333" }]}>
                  {item.name}
                </Text>
              </View>

              {/* Quantidade de Eat Coins */}
              <View className="flex-row items-center">
                <EatCoinSvg width={25} height={50} style={{ marginRight: 6 }} />
                <Text
                  style={[
                    globalStyles.textRegular,
                    { fontWeight: "bold", color: "#F58F00" },
                  ]}
                >
                  {item.coins}
                </Text>
              </View>
            </View>
          )}
          nestedScrollEnabled={true}
        />
      </View>
    </TabLayoutWithOutHeader>
  );
}
