import { StatusBar, Text, View, SafeAreaView, FlatList } from "react-native";
import { globalStyles } from "@/src/assets/styles/Global";

const data = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
];

export default function HomeApoiador() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        className="bg-primary"
        barStyle="light-content"
        translucent={false}
      />

      <View className="w-full h-40 p-3 bg-primary items-center justify-center">
        <Text style={globalStyles.heading1} className="color-white">
          Olá, Outback
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
