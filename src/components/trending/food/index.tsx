import { Image, Pressable, Text, View } from "react-native";

import { FoodProps } from "..";
import { globalStyles } from "@/src/assets/styles/Global";

export default function FoodItem({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col" onPress={() => { console.log("CLICOU NO ITEM " + food.name) }}>
      <Image source={{ uri: food.image }} className="w-44 h-36" style={globalStyles.roundedRegular} />

      <Text className="mt-1 font-medium" style={globalStyles.textRegular}>{food.name}</Text>
      <Text style={globalStyles.textSmallGray}>{food.time} - R${food.delivery}</Text>
    </Pressable>
  );
}
