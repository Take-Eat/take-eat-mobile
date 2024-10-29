import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useRef, useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState<Region | null>(null);

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
      />
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
            textInput: {
              height: 44,
              color: "#333",
              fontSize: 16,
              paddingLeft: 10,
            },
            listView: {
              maxHeight: 120,
              width: "100%", // Largura completa
              alignSelf: "center", // Centraliza a lista
              borderRadius: 10,
            },
            row: {
              padding: 13,
              height: 44,
              flexDirection: "row",
              backgroundColor: "#f1f1f1",
              borderBottomWidth: 0.5,
              borderBottomColor: "#ddd",
            },
            description: { color: "#555" },
            poweredContainer: { display: "none" },
          }}
          textInputProps={{
            placeholderTextColor: "#888",
          }}
          enablePoweredByContainer={false}
        />
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
    paddingHorizontal: 10,
  },
});
