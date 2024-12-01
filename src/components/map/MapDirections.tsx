import MapViewDirections from "react-native-maps-directions";
import { Region } from "react-native-maps";

interface MapDirectionsProps {
  origin: Region | null;
  destination: Region | null;
  onReady: (distance: number, duration: number) => void;
}

const API_GOOGLE = "AIzaSyBy-Je5kVGOPI93-kmKHogYBObed_6sXkk";

export default function MapDirections({
  origin,
  destination,
  onReady,
}: MapDirectionsProps) {
  if (!origin || !destination || !API_GOOGLE) return null;

  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={API_GOOGLE}
      strokeWidth={4}
      strokeColor="#F58F00"
      onReady={(result) => {
        onReady(result.distance, result.duration);
      }}
    />
  );
}
