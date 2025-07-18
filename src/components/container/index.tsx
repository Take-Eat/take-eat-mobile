import { View } from "react-native";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

interface Props {
  children?: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <View className="min-h-full p-4">
      {children}
    </View >
  );
}
