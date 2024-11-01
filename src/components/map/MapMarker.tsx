import { Animated, Easing } from "react-native";
import { Marker } from "react-native-maps";

interface MapMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

export default function MapMarker({ coordinate }: MapMarkerProps) {
  const scaleValue = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.5,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Marker
      coordinate={coordinate}
      title="Destino"
      description="Local de entrega"
    >
      <Animated.Image
        source={require("@/src/assets/images/logo.png")}
        style={{ width: 50, height: 50, transform: [{ scale: scaleValue }] }}
      />
    </Marker>
  );
}
