import { Header } from "@components/header";
import { View, ScrollView } from "react-native";
import { Container } from "@components/container";

interface Props {
  children?: React.ReactNode;
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
        <View>{children}</View>
      </Container>
    </ScrollView>
  );
}
