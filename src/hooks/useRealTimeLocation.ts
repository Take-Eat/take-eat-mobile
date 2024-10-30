import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Region } from "react-native-maps";

export const useRealTimeLocation = () => {
  const [location, setLocation] = useState<Region | null>(null);

  useEffect(() => {
    const startWatching = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão de localização negada!");
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000, // Atualiza a cada 1 segundo
          distanceInterval: 1, // Atualiza a cada 1 metro
        },
        (response) => {
          const { latitude, longitude } = response.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.0000922,
            longitudeDelta: 0.0000421,
          });
        }
      );
    };

    startWatching();
  }, []);

  return location;
};
