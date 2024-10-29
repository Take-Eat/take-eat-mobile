import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface Props {
  color: "bg-gray-100" | "bg-gray-100" | "bg-gray-500" | "bg-gray-700";
  iconName: "newspaper" | "person-sharp" | "location-sharp" | "notifications";
  iconSize: number;
  //   iconColor:
  //     | "bg-primary"
  //     | "bg-secondary"
  //     | "bg-secondary-100"
  //     | "bg-secondary-200";

  title: string;
  titleSize: "text-lg" | "text-xl" | "text-2xl";
  titleColor: "text-black" | " text-white";
}

export default function CardMenu({
  color,
  iconName,
  iconSize,
  //   iconColor,
  title,
  titleSize,
  titleColor,
}: Props) {
  return (
    <View
      className={`${color} w-full h-24 flex-row justify-between items-center px-5`}
    >
      <View className="flex-row gap-3 items-center flex-1">
        <Ionicons name={iconName} size={iconSize} color={"#F58F00"} />

        <Text
          className={`${titleSize} ${titleColor} font-semibold w-40`}
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>

      <AntDesign name="right" size={iconSize} />
    </View>
  );
}
