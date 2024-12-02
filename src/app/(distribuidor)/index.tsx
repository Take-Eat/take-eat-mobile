import { globalStyles } from "@/src/assets/styles/Global";

import {
  TabLayout,
  Banner,
  Section,
  TrendingFoods,
  Donors,
  DonorsList,
} from "@components";

export default function HomeDistribuidor() {
  return (
    <TabLayout>
      <Banner />

      <Section
        name="Prestes a vencer"
        size={globalStyles.heading2}
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <TrendingFoods />

      <Section
        name="Bebidas"
        size={globalStyles.heading2}
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <TrendingFoods />

      <Section
        name="Não perecíveis"
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

      <Section
        name="Apoiadores"
        size={globalStyles.heading2}
        lable=""
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />
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

      <Section
        name="Congelados"
        size={globalStyles.heading2}
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />

      <TrendingFoods />
    </TabLayout>
  );
}
