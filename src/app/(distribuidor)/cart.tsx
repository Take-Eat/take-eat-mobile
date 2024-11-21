import { globalStyles } from "@/src/assets/styles/Global";
import { TabLayoutWithOutHeader } from "@/src/components";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "Cesta de Frutas",
    image: "https://via.placeholder.com/100",
    price: 2.5,
    quantity: 1,
  },
  {
    id: "2",
    name: "Pão Integral",
    image: "https://via.placeholder.com/100",
    price: 2.75,
    quantity: 2,
  },
  {
    id: "3",
    name: "Suco Natural",
    image: "https://via.placeholder.com/100",
    price: 1.0,
    quantity: 1,
  },
  {
    id: "4",
    name: "Cuscuz Pressão",
    image: "https://via.placeholder.com/100",
    price: 2.0,
    quantity: 1,
  },
];

export default function CartScreen() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  // Função para calcular o valor total
  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  // Função para alterar a quantidade de itens
  const updateQuantity = (id: string, action: "increment" | "decrement") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Função para remover um item
  const removeItem = (id: string) => {
    Alert.alert(
      "Remover Item",
      "Deseja realmente remover este item do carrinho?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () =>
            setCart((prevCart) => prevCart.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  return (
    <TabLayoutWithOutHeader>
      <View className="flex-1">
        {/* Título */}
        <Text className="text-center mb-4" style={globalStyles.heading1}>
          Seu Carrinho
        </Text>

        {/* Lista de itens */}
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View
              className="flex-row items-center bg-white p-3 rounded-xl mb-3 shadow-black"
              style={styles.shadowCard}
            >
              {/* Imagem */}
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-xl mr-3"
              />

              {/* Informações do produto */}
              <View className="flex-1">
                <Text style={globalStyles.textRegular}>{item.name}</Text>
                <Text style={globalStyles.textSmallGray}>
                  Entrega: R$ {item.price.toFixed(2)}
                </Text>

                {/* Controle de quantidade */}
                <View className="flex-row items-center mt-2">
                  <Pressable
                    className="bg-slate-300 px-2 py-1 rounded mx-1"
                    onPress={() => updateQuantity(item.id, "decrement")}
                  >
                    <AntDesign name="minus" size={14} />
                  </Pressable>
                  <Text style={globalStyles.textSmall}>{item.quantity}</Text>
                  <Pressable
                    className="bg-slate-300 px-2 py-1 rounded mx-1"
                    onPress={() => updateQuantity(item.id, "increment")}
                  >
                    <AntDesign name="plus" size={14} />
                  </Pressable>
                </View>
              </View>

              {/* Botão de remover */}
              <Pressable
                className="p-2 rounded"
                style={{ backgroundColor: "#FF6961" }}
                onPress={() => removeItem(item.id)}
              >
                <AntDesign name="close" size={14} color={"#FFF"} />
              </Pressable>
            </View>
          )}
        />

        {/* Resumo do carrinho */}
        <View
          className="mt-4 p-3 bg-white rounded-lg shadow-black absolute bottom-12 left-0 right-0"
          style={styles.shadowCard}
        >
          <Text
            className="font-bold text-center mb-3"
            style={globalStyles.textLarger}
          >
            Total: R$ {calculateTotal()}
          </Text>
          <Pressable
            className="py-3 rounded-lg items-center"
            style={{ backgroundColor: "#28A745" }}
            onPress={() =>
              Alert.alert("Finalizar Pedido", "Pedido realizado com sucesso!")
            }
          >
            <Text
              className="font-bold color-white"
              style={globalStyles.textLarger}
            >
              Finalizar Pedido
            </Text>
          </Pressable>
        </View>
      </View>
    </TabLayoutWithOutHeader>
  );
}

const styles = StyleSheet.create({
  shadowCard: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
