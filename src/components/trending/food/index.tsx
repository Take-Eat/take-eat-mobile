import { Image, Pressable, Text, View } from "react-native";

import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";

export default function FoodItem({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col rounded-xl">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View>
        <Text className="text-black mt-1">{food.name}</Text>
      </View>
    </Pressable>
  );
}
