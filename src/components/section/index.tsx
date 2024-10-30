import { View, Text, Pressable } from "react-native";


interface iText {
  fontSize: number,
  fontFamily: string,
}
interface Props {
  name: string;
  size: iText;
  lable: string;
  action: () => void;
}

export default function Section({ name, size, lable, action }: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Text className="font-semibold my-4 self-start" style={size}>{name}</Text>

      <Pressable onPress={action}>
        <Text className="text-primary font-inter">{lable}</Text>
      </Pressable>
    </View>
  );
}
