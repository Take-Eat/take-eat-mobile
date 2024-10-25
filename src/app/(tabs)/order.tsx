import { FlatList, Image, Text, View } from "react-native";
import { TabLayout } from "@components";
import { Card } from "@components";
import { useEffect, useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

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
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/orders`
      );
      const data = await response.json();
      setOrders(data);
    }

    getOrders();
  }, []);

  return (
    <TabLayout>
      <Text className="text-primary text-2xl font-semibold text-center py-6">
        Histórico
      </Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <Card>
            <View className="flex-row items-center h-full gap-3 p-2">
              {/* Foto do pedido */}
              <Image
                source={{ uri: item.image }}
                className="w-20 h-20 rounded-full"
              />

              {/* Informações do pedido */}
              <View className="h-full w-48 justify-center">
                <Text className="text-xl text-black" numberOfLines={1}>
                  {item.name}
                </Text>

                <Text numberOfLines={1}>Prazo de consumo - {item.time}</Text>

                <Text numberOfLines={1}>Tipo de alimento - {item.type}</Text>
              </View>
            </View>

            <View className="flex justify-center pr-2">
              {/* Status do pedido */}
              <View className="flex-row gap-2">
                <Text>Status</Text>

                <FontAwesome5
                  name={
                    item.status === "andamento"
                      ? "motorcycle"
                      : item.status === "concluido"
                      ? "check"
                      : ""
                  }
                  size={20}
                  color="#FF9F1C"
                />
              </View>

              {/* Quantidade de alimento do pedido */}
              <Text className="font-semibold text-black">x {item.amount}</Text>

              <View className="flex-row gap-2">
                <Text>Embalado</Text>
                <Feather
                  name={item.isPacked ? "check-circle" : "x-circle"}
                  size={20}
                  color={item.isPacked ? "#18794E" : "#CD2B31"}
                />
              </View>
            </View>
          </Card>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </TabLayout>
  );
}
