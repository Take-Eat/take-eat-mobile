// src/app/tabs/index.tsx
import { View, Text } from "react-native";
import TabLayout from "./TabLayout";
import { Banner } from "@/src/components/banner";
import { Container } from "@/src/components/container";
import { Section } from "@/src/components/section";
import { TrendingFoods } from "@/src/components/trending";
import { Donors } from "@/src/components/donors";
// Importando o Layout das Tabs

export default function Home() {
  return (
    <TabLayout>
      <Container>
        <Banner />

        <Section
          name="Recomendados"
          size="text-2xl"
          lable="Ver mais"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />

        <TrendingFoods />

        <Section
          name="Melhores avaliados"
          size="text-2xl"
          lable="Ver mais"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />

        <TrendingFoods />

        <Section
          name="Doadores"
          size="text-2xl"
          lable="Ver todos"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />

        <Donors />
      </Container>
    </TabLayout>
  );
}
