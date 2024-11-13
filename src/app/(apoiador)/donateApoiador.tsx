import { globalStyles } from "@/src/assets/styles/Global";
import { Text, View } from "react-native";
import QrCodeSvg from "@/src/assets/images/qrcode.svg";
import { TabLayout } from "@components";

export default function DonateApoiador() {
  return (
    <TabLayout>
      <View className="w-full h-full flex justify-center items-center">
        <QrCodeSvg />

        <Text
          className="mt-5 text-center font-inter"
          style={globalStyles.textLarger}
        >
          Contribua com a manutenção do App e com a nossa causa, através da
          <Text className="color-primary" style={globalStyles.heading2}>
            {" "}
            chave pix
          </Text>
          !
        </Text>
      </View>
    </TabLayout>
  );
}
