import { globalStyles } from "@/src/assets/styles/Global";
import { SearchBar, TabLayoutWithOutHeader } from "@components";
import { Text, View } from "react-native";

export default function RankingEatCoin() {
  return (
    <>
      <TabLayoutWithOutHeader>
        <View className="flex-1 items-center">
          <Text style={globalStyles.heading1}>Ranking de Doações</Text>

          <SearchBar />
        </View>
      </TabLayoutWithOutHeader>
    </>
  );
}
