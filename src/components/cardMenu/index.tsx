import { globalStyles } from "@/src/assets/styles/Global";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface iText {
  fontSize: number,
  fontFamily: string,
}
interface Props {
  color: string;
  iconName?: string;
  iconSize: number;
  title: string;
  titleText?: iText;
}

export default function CardMenu({
  color,
  iconName,
  iconSize,
  title,
  titleText,
}: Props) {
  return (
    <View
      className={`${color} w-ful h-[70px] flex-row justify-between items-center p-5`}
      style={globalStyles.roundedRegular}
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={iconName} size={iconSize} color={"#F58F00"} />

        <Text
          className="font-semibold"
          style={titleText}
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>

      <AntDesign name="right" size={iconSize} />
    </View>
  );
}
