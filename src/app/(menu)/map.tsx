import {
  Animated,
  Easing,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useRef, useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";

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

const getMyLocation = async (): Promise<Region | undefined> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permissão de localização negada!");
    return;
  }

  const { latitude, longitude } = (await Location.getCurrentPositionAsync({}))
    .coords;
  return {
    latitude,
    longitude,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };
};

export default function Address() {
  const [destination, setDestination] = useState<Region | null>(null);
  const [location, setLocation] = useState<Region | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    const initializeLocation = async () => {
      const region = await getMyLocation();
      if (region) {
        setLocation(region);
        mapRef.current?.animateToRegion(region, 1000);
      }
    };
    initializeLocation();
  }, []);

  return (
    <View style={styles.contentContainer}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={location || undefined}
        showsUserLocation
      >
        {location &&
          destination &&
          process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE && (
            <MapViewDirections
              origin={location}
              destination={destination}
              apikey={process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE}
              strokeWidth={4}
              strokeColor="#F58F00"
              onReady={(result) => {
                setDistance(result.distance);

                setPrice(result.distance * 0.6);

                setDuration(result.duration);

                mapRef.current?.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50,
                  },
                });
              }}
            />
          )}
        {destination && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            title="Destino"
            description="Local de entrega"
          >
            <Animated.Image
              source={require("@/src/assets/images/logo.png")}
              style={{
                width: 50,
                height: 50,
                transform: [{ scale: scaleValue }],
              }}
            />
          </Marker>
        )}
      </MapView>
      <KeyboardAvoidingView
        style={styles.searchContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <GooglePlacesAutocomplete
          placeholder="Endereço e número..."
          fetchDetails={true}
          onPress={(data, details = null) => {
            if (details) {
              const { lat, lng } = details.geometry.location;
              const region = {
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              };
              setDestination(region);
              mapRef.current?.animateToRegion(region, 1000);
            }
          }}
          query={{
            key: process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE,
            language: "pt-BR",
            types: "(cities)",
          }}
          styles={{
            container: { flex: 1 },
            textInputContainer: {
              backgroundColor: "#ffffff",
              borderRadius: 20,
              padding: 8,
              marginTop: 2,
              marginHorizontal: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            },
            listView: {
              maxHeight: 120,
              width: "100%", // Largura completa
              alignSelf: "center", // Centraliza a lista
              borderRadius: 10,
            },
          }}
          textInputProps={{
            placeholderTextColor: "#888",
          }}
          enablePoweredByContainer={false}
        />

        {distance && price && duration && (
          <View className="flex-1 justify-center items-center bg-tertiary-200 p-3">
            <Text className="text-white text-lg font-semibold">
              Distância: {distance.toFixed(2).replace(".", ",")} km
            </Text>
            <Text className="text-white text-lg font-semibold">
              Tempo: {duration.toFixed(0)} min
            </Text>

            <TouchableOpacity className="bg-primary rounded-lg p-7 mt-3 justify-center items-center">
              <Text className=" text-white text-2xl font-bold">
                <MaterialIcons name="payment" size={24} />
                Pagar R${price.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    height: "50%",
    backgroundColor: "black",
  },
  searchContainer: {
    backgroundColor: "#443936",
    height: "50%",
    justifyContent: "center",
  },
});
