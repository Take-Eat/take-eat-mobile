import { globalStyles } from "@/src/assets/styles/Global";
import { Header, TabLayout } from "@/src/components";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function HomeDoador() {
  const doaçõesAtivos = [
    { id: "1", distribuidor: "Igreja A", alimento: "Banana" },
    { id: "2", distribuidor: "Creche B", alimento: "Melancia" },
  ];

  const alimentosDoados = 120.0; // Exemplo de alimentos peso de alimento doado
  const doacoesConcluidas = 65; // Número de doações concluídas

  return (
    <TabLayout>
      {/* Cabeçalho */}
      <View className="flex-1">
        <View className="my-5">
          <Text className="text-center" style={globalStyles.heading1}>
            Olá, Doador(a)!
          </Text>
          <Text className="text-center" style={globalStyles.textLarger}>
            Confira suas doações
          </Text>
        </View>

        {/* Resumo */}
        <View className="flex-row justify-between mb-5">
          <View
            style={[
              globalStyles.roundedRegular,
              styles.shadowCard,
              { width: "48%" },
            ]}
            className="bg-white p-4 items-center shadow-black"
          >
            <Text style={globalStyles.textRegular}>Peso total</Text>
            <Text className="mt-1" style={globalStyles.textLargerBold}>
              {alimentosDoados.toFixed(2)}kg
            </Text>
          </View>
          <View
            style={[
              globalStyles.roundedRegular,
              styles.shadowCard,
              { width: "48%" },
            ]}
            className="bg-white p-4 items-center shadow-black"
          >
            <Text style={globalStyles.textRegular}>Doações Concluídas</Text>
            <Text className="mt-1" style={globalStyles.textLargerBold}>
              {doacoesConcluidas}
            </Text>
          </View>
        </View>

        {/* Pedidos Ativos */}
        <View className="flex-1 mb-5">
          <Text className="mb-3" style={globalStyles.textLargerBold}>
            Doações Ativas
          </Text>
          {doaçõesAtivos.length > 0 ? (
            <FlatList
              data={doaçõesAtivos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  className="bg-white p-4 mb-3 shadow-black"
                  style={[styles.shadowCard, globalStyles.roundedRegular]}
                >
                  <Text style={globalStyles.textRegular}>
                    Distribuidor: {item.distribuidor}
                  </Text>
                  <Text style={globalStyles.textRegular}>
                    Alimento: {item.alimento}
                  </Text>
                  <TouchableOpacity
                    className="py-2 items-center mt-3"
                    style={[
                      globalStyles.roundedRegular,
                      { backgroundColor: "#1E90FF" },
                    ]}
                  >
                    <Text
                      className="color-white"
                      style={globalStyles.textRegularBold}
                    >
                      Confirmar doação
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          ) : (
            <Text
              className="text-center mt-5"
              style={globalStyles.textRegularGray}
            >
              Nenhum doação ativa no momento.
            </Text>
          )}
        </View>

        {/* Botão de Histórico */}
        <TouchableOpacity
          className="py-4 items-center bg-primary absolute bottom-12 left-0 right-0"
          style={[globalStyles.roundedRegular]}
        >
          <Text className="color-white" style={globalStyles.textLargerBold}>
            Ver Histórico de Doações
          </Text>
        </TouchableOpacity>
      </View>
    </TabLayout>
  );
}

const styles = StyleSheet.create({
  shadowCard: {
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
});
