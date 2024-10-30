import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface SearchBarProps {
  onPlaceSelected: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}

export default function MapSearchBar({ onPlaceSelected }: SearchBarProps) {
  return (
    <GooglePlacesAutocomplete
      placeholder="Endereço e número..."
      fetchDetails={true}
      onPress={(data, details = null) => {
        if (details) {
          const { lat, lng } = details.geometry.location;
          onPlaceSelected({
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          });
        }
      }}
      query={{
        key: process.env.EXPO_PUBLIC_LOCAL_API_GOOGLE,
        language: "pt-BR",
      }}
      styles={{
        container: { flex: 1 },
        textInputContainer: {
          backgroundColor: "#ffffff",
          borderRadius: 20,
          padding: 8,
        },
      }}
      textInputProps={{
        placeholderTextColor: "#888",
      }}
      enablePoweredByContainer={false}
    />
  );
}
