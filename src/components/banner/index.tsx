import { View, FlatList } from "react-native";
import BanerItem from "./banerItem";

const data = [
  {
    id: 1,
    imagem: "https://i.ibb.co/bsxc1wT/banner3.png",
  },
  {
    id: 2,

    imagem: "https://i.ibb.co/rvnyv04/banner1.png",
  },
  {
    id: 3,
    imagem: "https://i.ibb.co/9bspdRb/banner2.png",
  },
];

export default function Banner() {
  return (
    <View className="w-full h-36 md:h-60 2xl mt-5 mb-4">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BanerItem id={item.id} image={item.imagem} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
