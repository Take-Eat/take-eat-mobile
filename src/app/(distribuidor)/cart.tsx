import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { TabLayoutWithOutHeader } from "@/src/components";
import { globalStyles } from "@/src/assets/styles/Global";

interface CartItem {
  id: string;
  name: string;
  image: string;
  priceEntrega: number;
  quantity: number;
  maxQuantity: number; // Nova propriedade para quantidade máxima
}

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "Cesta de Frutas",
    image: "https://via.placeholder.com/100",
    priceEntrega: 2.5,
    quantity: 1,
    maxQuantity: 1000, // Exemplo de quantidade máxima
  },
  {
    id: "2",
    name: "Pão Integral",
    image: "https://via.placeholder.com/100",
    priceEntrega: 2.75,
    quantity: 2,
    maxQuantity: 5,
  },
  {
    id: "3",
    name: "Suco Natural",
    image: "https://via.placeholder.com/100",
    priceEntrega: 1.0,
    quantity: 1,
    maxQuantity: 8,
  },
  {
    id: "4",
    name: "Cuscuz Pressão",
    image: "https://via.placeholder.com/100",
    priceEntrega: 2.0,
    quantity: 1,
    maxQuantity: 6,
  },
];

export default function CartScreen() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.priceEntrega, 0)
      .toFixed(2);

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    setModalVisible(false);
  };

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
                  Entrega: R$ {item.priceEntrega.toFixed(2)}
                </Text>

                <Text style={globalStyles.textSmallGray}>
                  Quantidade: {item.quantity}
                </Text>
              </View>

              {/* Botão de remover */}
              <Pressable
                className="p-3 mr-1"
                style={[
                  { backgroundColor: "#FF6961" },
                  globalStyles.roundedRegular,
                ]}
                onPress={() => removeItem(item.id)}
              >
                <AntDesign name="close" size={14} color={"#FFF"} />
              </Pressable>

              {/* Botão de alterar quantidade */}
              <Pressable
                className="p-3 ml-1"
                style={[
                  { backgroundColor: "#1E90FF" },
                  globalStyles.roundedRegular,
                ]}
                onPress={() => {
                  setSelectedItem(item);
                  setModalVisible(true);
                }}
              >
                <Octicons name="pencil" size={14} color={"#FFF"} />
              </Pressable>
            </View>
          )}
        />

        {/* Modal para alterar quantidade */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            className="flex-1 justify-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <View
              className="bg-white p-5 items-center"
              style={[styles.modalContent, globalStyles.roundedRegular]}
            >
              <Text style={globalStyles.textLarger}>
                {selectedItem?.name || "Item"}
              </Text>
              <Text style={globalStyles.textRegular}>
                Selecione a quantidade (máx: {selectedItem?.maxQuantity})
              </Text>

              <FlatList
                data={Array.from(
                  { length: selectedItem?.maxQuantity || 0 },
                  (_, i) => i + 1
                )}
                keyExtractor={(item) => item.toString()}
                numColumns={5}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="m-1 p-3 bg-gray-600 items-center w-14"
                    style={globalStyles.roundedRegular}
                    onPress={() => updateQuantity(selectedItem!.id, item)}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />

              <Pressable
                className="mt-5 bg-primary p-3"
                style={globalStyles.roundedRegular}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "#FFF" }}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

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
  modalContent: {
    width: "90%",
    maxHeight: "70%",
  },
});
