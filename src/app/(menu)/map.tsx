import { Container, InputSearch } from "@/src/components";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useState, useEffect, useRef } from "react";
import { Text } from "react-native";

const getMyLocation = async (): Promise<Region | undefined> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return;
  }

  const { latitude, longitude } = (await Location.getCurrentPositionAsync({}))
    .coords;

  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.000922,
    longitudeDelta: 0.000421,
  };
  return region;
};

export default function Address() {
  const [destination, setDestination] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState(null);

  const mapRef = useRef<MapView>(null);

  const goToMyLocation = async () => {
    const region = await getMyLocation();
    region && mapRef.current?.animateToRegion(region, 1000);
  };

  return (
    <View style={styles.contentContainer}>
      <MapView
        style={styles.map}
        ref={mapRef}
        onMapReady={() => goToMyLocation()}
        showsUserLocation
      ></MapView>
      <View style={styles.search}></View>
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
