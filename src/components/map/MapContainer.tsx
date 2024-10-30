import MapView, { Region, Marker, MapOverlay } from "react-native-maps";
import MapDirections from "./MapDirections";
import MapMarker from "./MapMarker";
import { useEffect, useRef, useState } from "react";
import { useRealTimeLocation } from "@/src/hooks/useRealTimeLocation";

interface MapContainerProps {
  destination: Region | null;
  isRunning: boolean;
  onDirectionsReady: (distance: number, duration: number) => void;
}

export default function MapContainer({
  destination,
  isRunning,
  onDirectionsReady,
}: MapContainerProps) {
  const location = useRealTimeLocation(); // Posição atualizada em tempo real
  const mapRef = useRef<MapView>(null);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (location && !initialLoad) {
      // Anima a câmera para a localização do usuário ao carregar o mapa
      mapRef.current?.animateCamera({
        center: location,
        zoom: 15,
      });
      setInitialLoad(true); // Evita re-centralizar após a inicialização
    }
  }, [location, initialLoad]);

  useEffect(() => {
    if (isRunning && location) {
      mapRef.current?.animateCamera({
        center: location,
        pitch: 30,
        zoom: 20,
      });
    }
  }, [location, isRunning]);

  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      initialRegion={location || undefined}
      showsUserLocation
    >
      {location && destination && (
        <>
          <MapDirections
            origin={isRunning ? location : { ...location }}
            destination={destination}
            onReady={onDirectionsReady}
          />

          <MapMarker coordinate={destination} />
        </>
      )}
    </MapView>
  );
}
