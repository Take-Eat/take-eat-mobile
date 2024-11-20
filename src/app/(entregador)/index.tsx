import { globalStyles } from "@/src/assets/styles/Global";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function HomeEntregador() {
  const pedidosAtivos = [
    { id: "1", cliente: "Igreja A", destino: "Rua A, nº 123" },
    { id: "2", cliente: "Creche B", destino: "Av. B, nº 456" },
  ];

  const ganhosTotais = 120.0; // Exemplo de ganhos acumulados
  const entregasConcluidas = 15; // Número de entregas concluídas

  return (
    <View className="flex-1 bg-slate-50 p-5">
      {/* Cabeçalho */}
      <View className="mb-5">
        <Text style={globalStyles.heading1}>Olá, Entregador(a)!</Text>
        <Text style={globalStyles.textLarger}>
          Confira suas entregas e ganhos
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
          <Text style={globalStyles.textRegular}>Ganhos Totais</Text>
          <Text className="mt-1" style={globalStyles.textLargerBold}>
            R$ {ganhosTotais.toFixed(2)}
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
          <Text style={globalStyles.textRegular}>Entregas Concluídas</Text>
          <Text className="mt-1" style={globalStyles.textLargerBold}>
            {entregasConcluidas}
          </Text>
        </View>
      </View>

      {/* Pedidos Ativos */}
      <View className="flex-1 mb-5">
        <Text className="mb-3" style={globalStyles.textLargerBold}>
          Pedidos Ativos
        </Text>
        {pedidosAtivos.length > 0 ? (
          <FlatList
            data={pedidosAtivos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                className="bg-white p-4 mb-3 shadow-black"
                style={[styles.shadowCard, globalStyles.roundedRegular]}
              >
                <Text style={globalStyles.textRegular}>
                  Cliente: {item.cliente}
                </Text>
                <Text style={globalStyles.textRegular}>
                  Destino: {item.destino}
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
                    Iniciar Entrega
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
            Nenhum pedido ativo no momento.
          </Text>
        )}
      </View>

      {/* Botão de Histórico */}
      <TouchableOpacity
        className="py-4 items-center"
        style={[globalStyles.roundedRegular, { backgroundColor: "#28A745" }]}
      >
        <Text className="color-white" style={globalStyles.textLargerBold}>
          Ver Histórico de Entregas
        </Text>
      </TouchableOpacity>
    </View>
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
