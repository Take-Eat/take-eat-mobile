import TabLayout from "./TabLayout";
import { SearchBar } from "@/src/components/search";
import { Section } from "@/src/components/section";
import { TrendingFoods } from "@/src/components/trending";
import { Donors } from "@/src/components/donors";

export default function Search() {
  return (
    <TabLayout>
      <SearchBar />

      <Section
        name="Mais procurados"
        size="text-2xl"
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />
      <TrendingFoods />

      <Section
        name="Doadores fodásticos"
        size="text-2xl"
        lable="Ver mais"
        action={() => {
          console.log("CLICOU NO VER TODOS");
        }}
      />
      <Donors />
    </TabLayout>
  );
}
