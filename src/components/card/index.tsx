import { globalStyles } from "@/src/assets/styles/Global";
import { Text, View } from "react-native";

interface Props {
  bgColor: string;
  children?: React.ReactNode;
}

export default function Card({ bgColor, children }: Props) {
  return (
    <View
      className={`w-full max-h-max flex flex-row justify-between items-center ${bgColor} p-2`}
      style={globalStyles.roundedRegular}
    >
      {children}
    </View>
  );
}
