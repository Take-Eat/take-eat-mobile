import { globalStyles } from "@/src/assets/styles/Global";
import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  checkBox: number[];
  setCheckBox: React.Dispatch<React.SetStateAction<number[]>>
}

export default function CheckBox({ checkBox, setCheckBox }: Props) {
  const Data = [
    {
      id: 1,
      title: "Verduras",
    },
    {
      id: 2,
      title: "Marmita",
    },
    {
      id: 3,
      title: "Não perecíves",
    },
    {
      id: 4,
      title: "Cogelados",
    },
    {
      id: 5,
      title: "Bebidas",
    },
  ];


  const handlePress = (id: number) => {
    setCheckBox((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id); // Remove o ID se já estiver selecionado
      } else {
        return [...prev, id]; // Adiciona o ID se não estiver selecionado
      }
    });
  };

  return (
    <View className="flex justify-center p-5">
      <FlatList
        data={Data}
        contentContainerStyle={{ gap: 6 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-row gap-3 items-center">
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <Fontisto
                name={
                  checkBox.includes(item.id)
                    ? "checkbox-active"
                    : "checkbox-passive"
                }
                size={20}
                color="#FF9F1C"
              />
            </TouchableOpacity>
            <Text style={globalStyles.textRegular}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
