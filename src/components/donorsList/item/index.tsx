import { Image, Pressable, Text, View } from "react-native";
import { DonorProps } from "..";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";

export default function Item({ item }: { item: DonorProps }) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <View>
        <Text className="text-base text-black leading-4 font-bold">
          {item.name}
        </Text>

        <View className="flex-row items-center gap-1">
          <FontAwesome name="star" size={14} color={colors.brand4} />
          {/*Colocar o selo do Take Eat*/}
          <Text>Selo Take</Text>
        </View>
      </View>
    </Pressable>
  );
}
