import { View, ScrollView } from "react-native";
import Container from "../container";
import Header from "../header"

interface Props {
  children?: React.ReactNode;
}

export function TabLayout({ children }: Props) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-20"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Header />
        {children}
      </Container>
    </ScrollView>
  );
}

export function TabLayoutWithOutHeader({ children }: Props) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-20"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        {children}
      </Container>
    </ScrollView>
  );
}
