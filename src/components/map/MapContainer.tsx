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
  const {
    location,
    //  heading
  } = useRealTimeLocation(); // Posição atualizada em tempo real
  const mapRef = useRef<MapView>(null);
  // const [initialLoad, setInitialLoad] = useState(false);

  // useEffect(() => {
  //   if (location && !initialLoad) {
  //     mapRef.current?.animateToRegion(location, 1000);

  //     setInitialLoad(true); // Evita re-centralizar após a inicialização
  //   }
  // }, [location, initialLoad]);

  useEffect(() => {
    if (destination) {
      mapRef.current?.animateToRegion(destination, 1000); // Centraliza o mapa no destino
    }
  }, [destination]);

  useEffect(() => {
    if (isRunning && location) {
      mapRef.current?.animateCamera(
        {
          center: location,
          pitch: 40, // ângulo inclinado para simular 3D
          zoom: 19, // alto nível de zoom para se aproximar do usuário
          altitude: 100, // ajusta a altitude para manter a visão aproximada
        },
        { duration: 1000 }
      );
    }
  }, [location, isRunning]);

  return (
    <>
      {location && (
        <MapView
          style={{ flex: 1 }}
          ref={mapRef}
          initialRegion={location}
          showsUserLocation
          followsUserLocation
        >
          {destination && (
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
      )}
    </>
  );
}
