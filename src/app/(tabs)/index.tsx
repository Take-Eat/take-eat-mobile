// src/app/tabs/index.tsx
import TabLayout from "@components/tabLayout";
import { Banner } from "@components/banner";
import { Container } from "@components/container";
import { Section } from "@components/section";
import { TrendingFoods } from "@components/trending";
import { Donors } from "@components/donors";
import DonorsList from "@components/donorsList";
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
          name="Top Doadores"
          size="text-2xl"
          lable="Ver todos"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />

        <Donors />

        <Section
          name="Doadores"
          size="text-2xl"
          lable="Ver todos"
          action={() => {
            console.log("CLICOU NO VER TODOS");
          }}
        />

        <DonorsList />
      </Container>
    </TabLayout>
  );
}
