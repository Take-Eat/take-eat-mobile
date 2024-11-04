import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import { globalStyles } from "@/src/assets/styles/Global";
import { useRef } from "react";

const H_MAX_HEIGHT = 160;
const H_MIN_HEIGHT = 1;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function HomeApoiador() {
  const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
  ];

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

      <FlatList
        style={{ paddingTop: H_MAX_HEIGHT }}
        data={data}
        renderItem={({ item }) => (
          <View className="h-80 p-5 border-b border-secondary-100">
            <Text>{item.title}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
}

/**
 * w-full
 * flex-row
 * justify-between
 * items-center
 *
 *
 */
