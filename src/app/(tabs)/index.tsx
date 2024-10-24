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
