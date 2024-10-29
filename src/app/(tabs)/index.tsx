import { globalStyles } from "@/src/assets/styles/Global";
import {
  TabLayout, Banner,
  Container,
  Section,
  TrendingFoods,
  Donors,
  DonorsList
} from "@components";

export default function Home() {
  return (
    <TabLayout>
      <Banner />

      <Section
        name="Recomendados"
        size={globalStyles.heading2}
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <TrendingFoods />

      <Section
        name="Melhores avaliados"
        size={globalStyles.heading2}
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <TrendingFoods />

      <Section
        name="Top Doadores"
        size={globalStyles.heading2}
        lable="Ver todos"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <Donors />

      <Banner />

      <Section
        name="Doadores"
        size={globalStyles.heading2}
        lable="Ver todos"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <DonorsList />

    </TabLayout>
  );
}
