import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { globalStyles } from "@/src/assets/styles/Global";
import { TabLayoutWithOutHeader } from "@/src/components";

interface Order {
  id: string;
  itemName: string;
  image: string;
  status: "Pendente" | "Preparando" | "Enviado" | "Entregue";
  deliveryTime: string;
}

const ordersMock: Order[] = [
  {
    id: "1",
    itemName: "Pizza Margherita",
    image: "https://via.placeholder.com/100",
    status: "Pendente",
    deliveryTime: "20 min",
  },
  {
    id: "2",
    itemName: "Hambúrguer Gourmet",
    image: "https://via.placeholder.com/100",
    status: "Preparando",
    deliveryTime: "15 min",
  },
  {
    id: "3",
    itemName: "Sushi Combo",
    image: "https://via.placeholder.com/100",
    status: "Enviado",
    deliveryTime: "10 min",
  },
  {
    id: "4",
    itemName: "Bolo de Chocolate",
    image: "https://via.placeholder.com/100",
    status: "Entregue",
    deliveryTime: "-",
  },
];

export default function OrderTracking() {
  const [orders, setOrders] = useState<Order[]>(ordersMock);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pendente":
        return "#FFA500"; // Laranja
      case "Preparando":
        return "#1E90FF"; // Azul
      case "Enviado":
        return "#FFD700"; // Amarelo
      case "Entregue":
        return "#32CD32"; // Verde
      default:
        return "#A0A0A0"; // Cinza
    }
  };

  return (
    <TabLayoutWithOutHeader>
      <View className="flex-">
        <Text className="text-center mb-4" style={globalStyles.heading1}>
          Acompanhamento de Pedidos
        </Text>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View
              className="flex-row items-center bg-white p-3 rounded-xl mb-3 shadow-black"
              style={styles.orderCard}
            >
              {/* Imagem do item */}
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-full mr-3"
              />

              {/* Informações do pedido */}
              <View className="flex-1">
                <Text style={globalStyles.textLarger}>{item.itemName}</Text>
                <Text
                  style={[styles.status, { color: getStatusColor(item.status) }]}
                >
                  {item.status}
                </Text>
                <Text style={globalStyles.textSmallGray}>
                  Tempo de entrega: {item.deliveryTime}
                </Text>
              </View>

              {/* Ícone de Detalhes */}
              <Pressable onPress={() => console.log(`Pedido ${item.id}`)}>
                <Feather name="chevron-right" size={24} color="#A0A0A0" />
              </Pressable>
            </View>
          )}
        />
      </View>
    </TabLayoutWithOutHeader>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  orderCard: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 4,
  },
  deliveryTime: {
    fontSize: 12,
    color: "#666",
  },
});
