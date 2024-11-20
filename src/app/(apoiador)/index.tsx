import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "@/src/assets/styles/Global";
import { VictoryBar, VictoryPie } from "victory-native";
import { TabLayout } from "@/src/components";

const mockData = [
  { id: 1, title: "Postagem 1", views: 1200, likes: 300, shares: 50 },
  { id: 2, title: "Postagem 2", views: 800, likes: 200, shares: 30 },
  { id: 3, title: "Postagem 3", views: 1500, likes: 500, shares: 80 },
];

export default function Dashboard() {
  const totalViews = mockData.reduce((sum, post) => sum + post.views, 0);
  const totalLikes = mockData.reduce((sum, post) => sum + post.likes, 0);
  const totalShares = mockData.reduce((sum, post) => sum + post.shares, 0);

  const pieData = mockData.map((post) => ({
    x: post.title,
    y: post.views,
  }));

  const barData = mockData.map((post, index) => ({
    x: `Post ${index + 1}`,
    y: post.likes,
  }));

  return (
    <TabLayout>
      <View className="flex-1">
        <Text className="m-5 text-center" style={globalStyles.heading1}>
          Seu de Alcance nas redes
        </Text>

        {/* Estatísticas Resumidas */}
        <View className="flex-row justify-between mb-8">
          <View style={[styles.statBox, globalStyles.roundedRegular]}>
            <Text style={styles.statValue}>{totalViews}</Text>
            <Text style={styles.statLabel}>Visualizações</Text>
          </View>
          <View style={[styles.statBox, globalStyles.roundedRegular]}>
            <Text style={styles.statValue}>{totalLikes}</Text>
            <Text style={styles.statLabel}>Curtidas</Text>
          </View>
          <View style={[styles.statBox, globalStyles.roundedRegular]}>
            <Text style={styles.statValue}>{totalShares}</Text>
            <Text style={styles.statLabel}>Compartilhamentos</Text>
          </View>
        </View>

        {/* Gráfico de Pizza */}
        <Text style={globalStyles.heading2}>Distribuição de Visualizações</Text>
        <VictoryPie
          data={pieData}
          colorScale={["#FFD700", "#F58F00", "#FF4500"]}
          innerRadius={50}
          labelRadius={75}
          style={{
            labels: { fill: "white", fontSize: 14, fontWeight: "bold" },
          }}
        />

        {/* Gráfico de Barras */}
        <Text style={globalStyles.heading2}>Curtidas por Postagem</Text>
        <VictoryBar
          data={barData}
          style={{
            data: { fill: "#4682B4", width: 20 },
          }}
        />
      </View>
    </TabLayout>
  );
}

const styles = StyleSheet.create({
  statBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
});
