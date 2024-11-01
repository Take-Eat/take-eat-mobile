import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Region } from "react-native-maps";

export const useRealTimeLocation = () => {
  const [location, setLocation] = useState<Region | null>(null);
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null = null;

    const startWatching = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão de localização negada!");
        return;
      }

      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000, // Atualiza a cada 1 segundo
          distanceInterval: 1, // Atualiza a cada 1 metro
        },
        (response) => {
          const { latitude, longitude, heading: newHeading } = response.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          });
          setHeading(newHeading || 0); // Define a orientação: nort, sul, leste e por aí vai, piranhaaaaaa
        }
      );
    };

    startWatching();

    // Limpeza para encerrar a assinatura quando o componente desmonta
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  return { location, heading };
};
