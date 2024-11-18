import { colors, globalStyles } from "@/src/assets/styles/Global";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

interface Reward {
  id: string;
  name: string;
  image: string;
  cost: number;
}

const rewardsMock: Reward[] = [
  {
    id: "1",
    name: "5 publicações no instagram",
    image: "https://via.placeholder.com/100",
    cost: 100,
  },
  {
    id: "2",
    name: "10 publicações no instagram",
    image: "https://via.placeholder.com/100",
    cost: 200,
  },
  {
    id: "3",
    name: "15 publicações no instagram",
    image: "https://via.placeholder.com/100",
    cost: 300,
  },
];

export default function spendCoin() {
  const [coins, setCoins] = useState(500); // Saldo de moedas
  const [rewards, setRewards] = useState<Reward[]>(rewardsMock);

  const handleRedeem = (cost: number, name: string) => {
    if (coins >= cost) {
      setCoins(coins - cost);
      Alert.alert("Resgate Concluído!", `Você resgatou: ${name}`);
    } else {
      Alert.alert("Saldo Insuficiente", "Você não tem moedas suficientes.");
    }
  };

  return (
    <View className="flex-1 bg-slate-50 px-4 py-5">
      {/* Título */}
      <Text className="text-center mb-4" style={globalStyles.heading1}>
        Use suas Eat Coins
      </Text>

      {/* Saldo Atual */}
      <View className="flex-row justify-center items-center mb-4">
        <Text className="font-bold" style={globalStyles.textLarger}>
          Saldo Atual:
        </Text>
        <Text
          className="color-primary font-bold"
          style={globalStyles.textLarger}
        >
          {" "}
          {coins} Coins
        </Text>
      </View>

      {/* Lista de Recompensas */}
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            className="flex-row items-center bg-white p-3 rounded-xl mb-3 shadow-black"
            style={styles.rewardCard}
          >
            {/* Imagem e Nome */}
            <Image
              source={{ uri: item.image }}
              className="w-16 h-16 rounded-xl mr-3"
            />
            <View className="flex-1">
              <Text className="font-bold" style={globalStyles.textLarger}>
                {item.name}
              </Text>
              <Text className="color-gray-300" style={globalStyles.textSmall}>
                {item.cost} Coins
              </Text>
            </View>

            {/* Botão de Resgate */}
            <Pressable
              style={[
                styles.redeemButton,
                coins < item.cost && styles.redeemButtonDisabled,
              ]}
              onPress={() => handleRedeem(item.cost, item.name)}
              disabled={coins < item.cost}
            >
              <Text className="color-white font-bold">
                {coins >= item.cost ? "Resgatar" : "Saldo Insuficiente"}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rewardCard: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  redeemButton: {
    backgroundColor: colors.brand4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  redeemButtonDisabled: {
    backgroundColor: "#CCC",
  },
});
