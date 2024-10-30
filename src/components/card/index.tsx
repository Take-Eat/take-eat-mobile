import { globalStyles } from "@/src/assets/styles/Global";
import { View } from "react-native";

interface Props {
  bgColor: string;
  children?: React.ReactNode;
}

export default function Card({ bgColor, children }: Props) {
  return (
    <View
      className={`w-full max-h-[70px] flex flex-row justify-between items-center ${bgColor} p-5`}
      style={globalStyles.roundedRegular}
    >
      {children}
    </View>
  );
}
