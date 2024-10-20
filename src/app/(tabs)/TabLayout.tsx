// src/app/tabs/TabLayout.tsx
import { Header } from "@/src/components/header";
import { View, ScrollView } from "react-native";

import Constants from "expo-constants";
import { Container } from "@/src/components/container";

const statusBarHeight = Constants.statusBarHeight;

interface Props {
  children: React.ReactNode;
}

export default function TabLayout({ children }: Props) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-20"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Header />
      </Container>

      <View>{children}</View>
    </ScrollView>
  );
}
