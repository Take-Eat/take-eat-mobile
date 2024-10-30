import MapView, { Region, Marker, MapOverlay } from "react-native-maps";
import MapDirections from "./MapDirections";
import MapMarker from "./MapMarker";
import { useEffect, useRef } from "react";
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
  

  useEffect(() => {
    if (destination && !isRunning) {
      mapRef.current?.animateCamera({
        center: destination,
        zoom: 15,
      });
    }
  }, [destination, isRunning]);

  useEffect(() => {
    if (isRunning && location) {
      mapRef.current?.animateCamera({
        center: location,
        pitch: 30
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
            origin={location}
            destination={destination}
            onReady={onDirectionsReady}
          />

          <MapMarker coordinate={destination} />
        </>
      )}
    </MapView>
  );
}
