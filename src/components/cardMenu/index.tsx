import { globalStyles } from "@/src/assets/styles/Global";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";


interface Props {
  color: string;
  iconName?: string;
  iconSize?: number;
  title: string;
}

export default function CardMenu({
  color,
  iconName,
  iconSize,
  title,
}: Props) {
  return (
    <View
      className={`${color} w-ful h-[70px] flex-row justify-between items-center p-5`}
      style={globalStyles.roundedRegular}
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={iconName} size={iconSize || 25} color={"#F58F00"} />

        <Text
          className="font-semibold"
          style={globalStyles.textRegular}
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>

      <AntDesign name="right" size={iconSize} />
    </View>
  );
}
