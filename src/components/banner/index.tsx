import { globalStyles } from "@/src/assets/styles/Global";
import { View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function Banner() {
  return (
    <View className="w-full h-36 md:h-60 2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 md:h-60"
          style={globalStyles.roundedRegular}
          key="1"
          onPress={() => {
            console.log("CLICOU NO BANNER 2");
          }}
        >
          <Image
            source={require("../../assets/images/banner1.png")}
            className="w-full h-36 md:h-60"
            style={globalStyles.roundedRegular}
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60"
          style={globalStyles.roundedRegular}
          key="2"
          onPress={() => {
            console.log("CLICOU NO BANNER 2");
          }}
        >
          <Image
            source={require("../../assets/images/banner2.png")}
            className="w-full h-36 md:h-60"
            style={globalStyles.roundedRegular}
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60"
          style={globalStyles.roundedRegular}
          key="3"
          onPress={() => {
            console.log("CLICOU NO BANNER 3");
          }}
        >
          <Image
            source={require("../../assets/images/banner3.png")}
            className="w-full h-36 md:h-60"
            style={globalStyles.roundedRegular}
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
