import { FlatList, Image, Text, View } from "react-native";
import { Container, TabLayout, TabLayoutWithOutHeader } from "@components";
import { Card } from "@components";
import { useEffect, useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { globalStyles } from "@/src/assets/styles/Global";
import { SafeAreaView } from "react-native";

export interface OrderProps {
  id: number;
  category: string;
  image: string;
  name: string;
  time: string;
  type: string;
  isPacked: boolean;
  amount: number;
  status: "concluido" | "andamento" | "cancelado";
}

export default function Order() {
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    async function getOrders() {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_MOCK}orders`);
      const data = await response.json();
      setOrders(data);
    }

    getOrders();
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Text className="text-primary text-center py-6" style={globalStyles.heading1}>
          Histórico
        </Text>
        <FlatList
          nestedScrollEnabled // solução de contorno para o erro de scroll dentro de scroll
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card bgColor="bg-gray-700">
              <View className="flex-row items-center gap-2">
                {/* Foto do pedido */}
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16"
                  style={globalStyles.roundedFull}
                />

                {/* Informações do pedido */}
                <View className="max-w-48 justify-center">
                  <Text style={globalStyles.heading3} numberOfLines={1}>
                    {item.name}
                  </Text>

                  <Text style={globalStyles.textSmallGray} numberOfLines={1}>Prazo de consumo - {item.time}</Text>

                  <Text style={globalStyles.textSmallGray} numberOfLines={1}>Tipo de alimento - {item.type}</Text>
                </View>
              </View>

              <View className="flex justify-center">
                {/* Status do pedido */}
                <View className="flex-row items-center gap-2">
                  <Text style={globalStyles.textRegular}>Status</Text>

                  <FontAwesome5
                    name={
                      item.status === "andamento"
                        ? "motorcycle"
                        : item.status === "concluido"
                          ? "check"
                          : ""
                    }
                    size={15}
                    color="#FF9F1C"
                  />
                </View>

                {/* Quantidade de alimento do pedido */}
                <Text style={globalStyles.textSmallGray}>x {item.amount}</Text>

                <View className="flex-row items-center gap-1">
                  <Text style={globalStyles.textSmallGray}>Embalado</Text>
                  <Feather
                    name={item.isPacked ? "check-circle" : "x-circle"}
                    size={15}
                    color={item.isPacked ? "#18794E" : "#CD2B31"}
                  />
                </View>
              </View>
            </Card>
          )}
          contentContainerStyle={{ gap: 10 }}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </SafeAreaView>
  );
}
