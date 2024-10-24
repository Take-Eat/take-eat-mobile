import { View } from "react-native";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <View className="px-4" style={{ marginTop: statusBarHeight + 8 }}>
      {children}
    </View>
  );
}
