import { Text, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <View className="w-full h-36 flex flex-row justify-between items-center bg-gray-700 rounded-xl">
      {children}
    </View>
  );
}