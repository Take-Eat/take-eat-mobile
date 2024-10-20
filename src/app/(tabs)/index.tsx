// src/app/tabs/index.tsx
import { View, Text } from "react-native";
import TabLayout from "./TabLayout";
import { Banner } from "@/src/components/banner";
import { Container } from "@/src/components/container";
// Importando o Layout das Tabs

export default function Home() {
  return (
    <TabLayout>
      <Container>
        <Banner />
      </Container>
    </TabLayout>
  );
}
