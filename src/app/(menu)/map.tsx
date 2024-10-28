import { StyleSheet, Text, View } from "react-native";
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
      <View style={styles.search}>
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
            language: "pt-br",
            types: "(cities)",
          }}
          styles={{
            listView: { height: 100 },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  map: {
    height: "60%",
    backgroundColor: "black",
  },
  search: {
    height: "40%",
    backgroundColor: "gray",
  },
});
