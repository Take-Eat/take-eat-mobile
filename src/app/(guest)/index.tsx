import { globalStyles } from "@/src/assets/styles/Global";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { CustomButton } from "@/src/components";

import ImgSVG1 from "@/src/assets/images/landing_page_img_1.svg"
import ImgBackSVG1 from "@/src/assets/images/landing_page_back_1.svg"
import ImgBackSVG2 from "@/src/assets/images/landing_page_back_2.svg"
import Hr from "@/src/assets/images/line.svg"
import ImgSVG2 from "@/src/assets/images/landing_page_img_2.svg"
import ImgSVG3 from "@/src/assets/images/landing_page_img_3.svg"
import ImgSVG4 from "@/src/assets/images/landing_page_img_4.svg"
import ImgSVG5 from "@/src/assets/images/landing_page_img_5.svg"
import ImgSVG6 from "@/src/assets/images/landing_page_img_6.svg"

export default function GuestHomeScreen() {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 p-4">
        <View className="relative my-10 flex items-center gap-2">
          <View className="absolute left-40  bottom-56">
            <ImgBackSVG1 width={200} height={200} />
          </View>
          <ImgSVG1 />
          <Text className="italic text-center" style={globalStyles.heading3}>
            “Vamos juntos construir um mundo com menos desperdício e menos fome”
          </Text>
          <Hr />
        </View>
        <View className="">
          <View className="flex-1 items-center">
            <Text className="text-center" style={globalStyles.textLarger}>
              Sou empresa e quero doar alimentos de empresas para ONGs e instituições sociais, combatendo o desperdício e a fome
            </Text>
            <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100 }]}>
              <Pressable onPress={() => { }}>
                <Text className="text-white text-center">Saiba mais</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className="my-10 px-2 flex items-center gap-2">
          <View className="flex flex-row justify-between items-center">
            <ImgSVG3 />
            <View className="flex-1 items-center">
              <Text className="text-center" style={globalStyles.textRegular}>
                Sou empresa e quero doar
              </Text>
              <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100 }]}>
                <Pressable onPress={() => { }}>
                  <Text className="text-white text-center">Saiba mais</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Hr />
          <View className="flex flex-row justify-between items-center">
            <View className="flex-1 items-center">
              <Text className="text-center" style={globalStyles.textRegular}>
                Sou ONG e Preciso de Alimentos
              </Text>
              <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100 }]}>
                <Pressable onPress={() => { }}>
                  <Text className="text-white text-center">Saiba mais</Text>
                </Pressable>
              </View>
            </View>
            <ImgSVG4 />
          </View>
        </View>
        <View className="relative">
          <View className="my-10 px-2 flex gap-2 items-center">
            <Text className="text-center text-primary" style={globalStyles.heading2}>Como funciona</Text>
            <View className="flex flex-row justify-between items-center">
              <View >
                <ImgSVG5 style={{ marginLeft: -47 }} />
              </View>
              <View className="flex-1">
                <Text style={[globalStyles.textRegular, { textAlign: "right" }]}>Nosso app conecta empresas do ramo alimentício que têm alimentos disponíveis para doação com ONGs e instituições sociais que distribuem esses alimentos para quem mais precisa. </Text>
                <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100, marginRight: 0, marginLeft: "auto" }]}>
                  <Pressable onPress={() => { }}>
                    <Text className="text-white text-center">Saiba mais</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <Hr />
          </View>
          <View className="mt-10 px-2 flex gap-2 items-center">
            <Text className="text-center text-primary" style={globalStyles.heading2}>Benefícios</Text>
            <View className="flex flex-row justify-between items-center">
              <View className="flex-1">
                <Text style={[globalStyles.textRegular, { textAlign: "left" }]}>
                  Para você empresa, você estará  contribuindo para a redução do desperdício, estará gerando impacto social e ambiental e também trará uma boa visibilidade para seu negócio
                </Text>
                <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100, marginRight: "auto", marginLeft: 0 }]}>
                  <Pressable onPress={() => { }}>
                    <Text className="text-white text-center">Saiba mais</Text>
                  </Pressable>
                </View>
              </View>
              <View >
                <ImgSVG5 style={{ marginRight: -40 }} />
              </View>
            </View>
            <Hr />
          </View>
          <View className="mb-10 px-2 flex gap-2 items-center">
            <View className="flex flex-row justify-between items-center">
              <View >
                <ImgSVG6 style={{ marginLeft: -25 }} />
              </View>
              <View className="flex-1">
                <Text style={[globalStyles.textRegular, { textAlign: "right" }]}>Nosso app conecta empresas do ramo alimentício que têm alimentos disponíveis para doação com ONGs e instituições sociais que distribuem esses alimentos para quem mais precisa. </Text>
              </View>
            </View>
          </View>
          <View className="absolute" style={{ marginTop: 170, marginLeft: -100 }}>
            <ImgBackSVG2 />
          </View>
        </View>
      </View>
    </ScrollView >
  );
}
