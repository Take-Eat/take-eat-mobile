import { Container, InputSearch } from "@/src/components";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export default function Address() {
  return (
    <View style={styles.contentContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
        }}
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
