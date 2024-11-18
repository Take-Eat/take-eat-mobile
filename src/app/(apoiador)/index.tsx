import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Animated,
  Pressable,
} from "react-native";
import { globalStyles } from "@/src/assets/styles/Global";
import { useRef } from "react";
import EatCoinSvg from "@/src/assets/images/EatCoin.svg";
import Grafico1Svg from "@/src/assets/images/grafico1.svg";
import Grafico2Svg from "@/src/assets/images/grafico2.svg";
import Grafico3Svg from "@/src/assets/images/grafico3.svg";
import { AntDesign, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const H_MAX_HEIGHT = 160;
const H_MIN_HEIGHT = 1;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function HomeApoiador() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        className="bg-primary"
        barStyle="light-content"
        translucent={false}
      />

      <Animated.View
        style={{ height: headerScrollHeight }}
        className="w-full p-3 bg-primary items-center justify-center absolute top-0 left-0 right-0 z-50 overflow-hidden"
      >
        <Text style={globalStyles.heading1} className="color-white">
          Olá, Outback
        </Text>
      </Animated.View>

      <Animated.ScrollView
        style={{ paddingTop: H_MAX_HEIGHT, paddingHorizontal: 40 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* <View className="h-20 flex-row items-center justify-between">
          <View>
            <Text style={globalStyles.heading1}>Saldo</Text>

            <View className="flex-row items-center gap-1">
              <EatCoinSvg width={30} height={30} />
              <Text style={globalStyles.heading2}>5000</Text>
            </View>
          </View>

          <AntDesign name="right" size={25} />
        </View> */}

        <View className="h-80 bg-red-100 py-5 justify-center items-center">
          <Pressable
            onPress={() => {
              router.push("/(apoiador)/donateApoiador");
            }}
            className="w-full h-24 flex-row items-center gap-3"
          >
            <Grafico1Svg width={300} height={300} />
          </Pressable>
        </View>

        <View className="h-80 bg-red-100 py-5 justify-center items-center">
          <Pressable
            onPress={() => {
              router.push("/(apoiador)/donateApoiador");
            }}
            className="w-full h-24 flex-row items-center gap-3"
          >
            <Grafico2Svg width={300} height={300} />
          </Pressable>
        </View>

        <View className="h-80 bg-red-100 py-5 justify-center items-center">
          <Pressable
            onPress={() => {
              router.push("/(apoiador)/donateApoiador");
            }}
            className="w-full h-24 flex-row items-center gap-3"
          >
            <Grafico3Svg width={300} height={300} />
          </Pressable>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
