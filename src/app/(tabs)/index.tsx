// src/app/tabs/index.tsx
import { View, Text } from "react-native";
import TabLayout from "./TabLayout";
import { Banner } from "@/src/components/banner";
// Importando o Layout das Tabs

export default function Home() {
  return (
    <TabLayout>
      <Banner />
    </TabLayout>
  );
}
