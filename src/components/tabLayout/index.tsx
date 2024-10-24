import { View, ScrollView } from "react-native";
import Container from "../container";
import Header from "../header"

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
