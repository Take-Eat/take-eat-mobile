import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Region } from "react-native-maps";

export const useRealTimeLocation = () => {
  const [location, setLocation] = useState<Region | null>(null);
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null = null;

    const startWatching = async () => {
      // Solicitar permissão
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão de localização negada!");
        return;
      }

      // Assinar atualizações de localização
      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000, // Atualizar a cada 1 segundo
          distanceInterval: 1, // Atualizar a cada 1 metro
        },
        (response) => {
          const { latitude, longitude, heading: newHeading } = response.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.01, // Ajuste para um zoom melhor no mapa
            longitudeDelta: 0.01,
          });
          setHeading(newHeading || 0); // Define a orientação padrão (0°)
        }
      );
    };

    startWatching();

    // Limpeza ao desmontar
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  return {
    location,
    heading,
  };
};
