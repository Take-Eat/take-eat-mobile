import { Image, Pressable, Text, View } from "react-native";

import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";

export default function FoodItem({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col rounded-xl" onPress={() => { console.log("CLICOU NO ITEM " + food.name)}}>
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <Text className="text-black mt-1 font-medium text-xl">{food.name}</Text>
      <Text className="text-neutral-600">{food.time} - R${food.delivery}</Text> 
    </Pressable>
  );
}
