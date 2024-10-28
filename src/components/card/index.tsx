import { Text, View } from "react-native";

interface Props {
  height: "h-20" | "h-24" | "h-30" | "h-36";
  bgColor:
    | "bg-gray-800"
    | "bg-gray-700"
    | "bg-gray-600"
    | "bg-gray-500"
    | "bg-gray-400"
    | "bg-gray-300";
  children?: React.ReactNode;
}

export default function Card({ height, bgColor, children }: Props) {
  return (
    <View
      className={`w-full ${height} flex flex-row justify-between items-center ${bgColor} rounded-2xl p-2`}
    >
      {children}
    </View>
  );
}
