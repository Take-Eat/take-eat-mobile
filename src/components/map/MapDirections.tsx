import MapViewDirections from "react-native-maps-directions";
import { Region } from "react-native-maps";

interface MapDirectionsProps {
  origin: Region | null;
  destination: Region | null;
  onReady: (distance: number, duration: number) => void;
}

export default function MapDirections({
  origin,
  destination,
  onReady,
}: MapDirectionsProps) {
  if (!origin || !destination || !process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE)
    return null;

  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE}
      strokeWidth={4}
      strokeColor="#F58F00"
      onReady={(result) => {
        onReady(result.distance, result.duration);
      }}
    />
  );
}
