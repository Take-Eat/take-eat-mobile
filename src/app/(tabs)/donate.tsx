import { TabLayout } from "@components";
import { View, Text, Image } from "react-native";

export default function Donate() {
  return (
    <TabLayout>
      <View className="w-full flex justify-center items-center">
        <Image
          source={require("../../assets/images/qrcode.png")}
          className="mt-32 w-96 justify-end rounded-2xl"
        />

        <Text className="w-96 text-black mt-5 font-medium text-xl">
          Contribua com a manutenção do App e com a nossa causa, através da
          <Text className="color-primary"> chave pix</Text>!
        </Text>
      </View>
    </TabLayout>
  );
}
