import { colors, globalStyles } from "@/src/assets/styles/Global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  [key: string]: any;
  isTextArea?: boolean; // Nova prop para diferenciar entre input normal e área de texto
}

export default function FormInput({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  isTextArea = false, // Padrão como falso
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="mb-1 ml-2" style={globalStyles.heading2}>
        {title.substring(0, 1).toUpperCase() + title.substring(1)}
      </Text>
      <View
        className={`w-full px-4 bg-gray-600 border-b-2 border-gray-500 flex flex-row items-center ${!props.editable && "bg-gray-500"
          }`}
        style={[
          globalStyles.roundedRegular,
          isTextArea && styles.textAreaContainer,
        ]}
      >
        <TextInput
          className={`flex-1 font-psemibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={props?.keyboardType === "password" && !showPassword}
          multiline={isTextArea}
          numberOfLines={isTextArea ? 5 : 1}
          textAlignVertical={isTextArea ? "top" : "center"}
          style={[globalStyles.textRegular]}
          {...props}
        />

        {props?.keyboardType === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons name={!showPassword ? "eye-off" : "eye"} size={20} color={colors.gray3} />

          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textArea: {
    textAlignVertical: "top", // Ajusta o alinhamento para o topo
  },
  textAreaContainer: {
    height: 100, // Altura maior para áreas de texto
    alignItems: "flex-start", // Alinha o conteúdo no início
  },
});
