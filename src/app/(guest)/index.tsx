import { globalStyles } from "@/src/assets/styles/Global";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { CustomButton } from "@/src/components";

import ImgSVG1 from "@/src/assets/images/landing_page_img_1.svg"
import ImgBackSVG1 from "@/src/assets/images/landing_page_back_1.svg"
import ImgBackSVG2 from "@/src/assets/images/landing_page_back_2.svg"
import ImgBackSVG3 from "@/src/assets/images/landing_page_back_3.svg"
import ImgBackSVG4 from "@/src/assets/images/landing_page_back_4.svg"
import ImgBackSVG5 from "@/src/assets/images/landing_page_back_5.svg"
import Hr from "@/src/assets/images/line.svg"
import ImgSVG2 from "@/src/assets/images/landing_page_img_2.svg"
import ImgSVG3 from "@/src/assets/images/landing_page_img_3.svg"
import ImgSVG4 from "@/src/assets/images/landing_page_img_4.svg"
import ImgSVG5 from "@/src/assets/images/landing_page_img_5.svg"
import ImgSVG6 from "@/src/assets/images/landing_page_img_6.svg"
import ImgSVG7 from "@/src/assets/images/landing_page_img_7.svg"
import ImgSVG8 from "@/src/assets/images/landing_page_img_8.svg"
import ImgSVG9 from "@/src/assets/images/landing_page_img_9.svg"
import ImgSVG10 from "@/src/assets/images/landing_page_img_10.svg"
import ImgSVGEx from "@/src/assets/images/Ellipse 22.svg"
import { ScreenFooter } from "react-native-screens";
import { router } from "expo-router";

export default function GuestHomeScreen() {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 p-4 gap-2">
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
              <Pressable onPress={() => {router.push("/(guest)/signIn") }}>
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
                  Para você empresa, sua contribuição trará a redução do desperdício, estará gerando impacto social e ambiental, e também trará uma boa visibilidade para seu negócio
                </Text>
                <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100, marginRight: "auto", marginLeft: 0 }]}>
                  <Pressable onPress={() => { }}>
                    <Text className="text-white text-center">Saiba mais</Text>
                  </Pressable>
                </View>
              </View>
              <View>
                <ImgSVG7 width={100} height={150} style={{ marginRight: 0 }} />
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
        <View className="mt-10 px-2 flex gap-2 items-center relative">
          <Text className="text-center text-primary" style={globalStyles.heading2}>Impacto Social</Text>
          <View className="flex flex-row justify-between items-center w-full">
            <View className="flex-1 justify-center max-w-[250px]">
              <Text style={[globalStyles.textRegular, { textAlign: "left" }]}>
                Nosso App conta com diversos colaboradores, junto a eles conseguimos evitar o desperdício uma grande quantidade de alimentos              </Text>
              {/* <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100, marginRight: "auto", marginLeft: 0 }]}>
                <Pressable onPress={() => { }}>
                  <Text className="text-white text-center">Saiba mais</Text>
                </Pressable>
              </View> */}
            </View>
            <View className="absolute right-[-35]">
              <ImgSVG8 width={180} height={150} style={{ zIndex: -1 }} />
            </View>
          </View>
          <Hr />
        </View>
        <View className="mt-14 mb-10 px-2 flex flex-row flex-wrap justify-center items-center gap-4">
          <View className="flex justify-center">
            <Text style={globalStyles.textRegular} className="text-center">Empresas Colaboradoras</Text>
            <Text style={globalStyles.heading3} className="text-center">532</Text>
          </View>
          <View className="flex justify-center">
            <Text style={globalStyles.textRegular} className="text-center">ONG's e Instituições</Text>
            <Text style={globalStyles.heading3} className="text-center">100</Text>
          </View>
          <View className="flex justify-center">
            <Text style={globalStyles.textRegular} className="text-center">Alimentos Aproveitados</Text>
            <Text style={globalStyles.heading3} className="text-center">2.5 toneladas</Text>
          </View>
        </View>
        <View className="mt-10 px-2 flex gap-2 justify-center items-center relative">
          <View className="flex justify-between items-center w-full gap-4">
            <View className="flex items-center max-w-[250px]">
              <Text style={[globalStyles.heading2, { textAlign: "center" }]}>
                O que você está esperando? Venha agora fazer parte da nossa iniciativa
              </Text>
              <View className="bg-primary px-4 py-2 mt-4" style={[globalStyles.roundedRegular, { width: 100 }]}>
                <Pressable onPress={() => { }}>
                  <Text className="text-white text-center">Saiba mais</Text>
                </Pressable>
              </View>
            </View>
            <Hr />
            <View>
              <ImgSVG9 width={180} height={150} />
            </View>
          </View>
          <View className="absolute">
            <ImgBackSVG3 width={380} />
          </View>
        </View>
        <View className="mt-10 px-2 flex gap-2 justify-center items-center relative">
          <Text className="text-center text-primary" style={globalStyles.heading2}>Parceiros</Text>
          <View className="flex justify-between items-center w-full gap-4">
            <View className=" flex flex-row gap-2 mt-4">
              <ImgSVGEx />
              <ImgSVGEx />
              <ImgSVGEx />
              <ImgSVGEx />
              <ImgSVGEx />
            </View>
            <View>
              <ImgSVG10 />
            </View>
          </View>
          <View className="absolute">
            <ImgBackSVG4 width={380} style={{ zIndex: -1 }} />
          </View>
        </View>
        <View className="my-10 px-2 flex gap-2 justify-center items-center relative">
          <Text className="text-center text-primary" style={globalStyles.heading2}>Nosso Time</Text>
          <View className="flex justify-between items-center w-full gap-4">
            <View className=" flex flex-row gap-4 mt-4">
              <View className="flex items-center">
                <ImgSVGEx />
                <Text style={globalStyles.textRegular}>Nome da Lenda</Text>
              </View>
              <View className="flex items-center">
                <ImgSVGEx />
                <Text style={globalStyles.textRegular}>Nome da Lenda</Text>
              </View>
              <View className="flex items-center">
                <ImgSVGEx />
                <Text style={globalStyles.textRegular}>Nome da Lenda</Text>
              </View>
            </View>
          </View>
          <View className="absolute right-8 top-3">
            <ImgBackSVG5 width={380} style={{ zIndex: -1 }} />
          </View>
        </View>
      </View>
      <View className="mt-16 p-5 bg-primary"><Text className="text-center text-white" style={globalStyles.heading3}>₢Copyright - Todos direitos reservados - Take Eat</Text></View>
    </ScrollView >
  );
}
