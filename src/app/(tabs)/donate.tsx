import { globalStyles } from "@/src/assets/styles/Global";
import { TabLayout } from "@components";
import { View, Text, Image } from "react-native";

export default function Donate() {
  return (
    <TabLayout>
      <View className="w-full flex justify-center items-center">
        <Image
          source={require("../../assets/images/qrcode.png")}
          className="mt-32 justify-end 2xl"
        />

        <Text className="mt-5 text-center font-inter" style={globalStyles.textLarger}>
          Contribua com a manutenção do App e com a nossa causa, através da
          <Text className="color-primary" style={globalStyles.heading2}> chave pix</Text>!
        </Text>
      </View>
    </TabLayout>
  );
}
