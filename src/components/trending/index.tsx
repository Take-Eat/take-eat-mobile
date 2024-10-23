import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FoodItem from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: "1";
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    console.log(process.env.LOCAL_IP)
    async function getFoods() {
      const response = await fetch(`http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/foods`);
      const data = await response.json();
      setFoods(data);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodItem food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
