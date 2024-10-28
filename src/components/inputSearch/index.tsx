import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function InputSearch() {
  return (
    <View className="flex-1 p-10 py-4 rounded-2xl bg-slate-100">
      <TextInput
        placeholder="Procure alimentos..."
        className="w-full h-full flex-1"
      />
    </View>
  );
}
