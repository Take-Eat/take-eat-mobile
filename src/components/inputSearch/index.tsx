import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Props {
  bgColor:
    | "bg-gray-800"
    | "bg-gray-700"
    | "bg-gray-600"
    | "bg-gray-500"
    | "bg-gray-400"
    | "bg-gray-300";
  textColor: "text-black" | "text-white";
  title: string;
  placeholderColor?: string; 
}

export default function InputSearch({
  bgColor,
  textColor,
  title,
  placeholderColor = "#000", // Define uma cor padrão para o placeholder
}: Props) {
  return (
    <View className={`flex-1 p-10 py-4 rounded-2xl ${bgColor}`}>
      <TextInput
        placeholder={title}
        className={`w-full h-full flex-1 ${textColor}`}
        placeholderTextColor={placeholderColor} // Defina a cor do placeholder aqui
      />
    </View>
  );
}
