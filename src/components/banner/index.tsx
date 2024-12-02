import { View, FlatList } from "react-native";
import BannerItem from "./banerItem";
import { useEffect, useState } from "react";

export interface BannerProps {
  id: number;
  image: string;
}

export default function Banner() {

    const [banner, setBanner] = useState<BannerProps[]>([]);

    useEffect(() => {
      async function getBanner() {
        const response = await fetch(
          `https://api-mock-take-eat.onrender.com/banner`
        );
        const data = await response.json();
        setBanner(data);
      }

      getBanner();
    }, []);
  return (
    <View className="w-full h-36 md:h-60 2xl mt-5 mb-4">
      <FlatList
        data={banner}
        renderItem={({ item }) => (
          <BannerItem id={item.id} image={item.image} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
