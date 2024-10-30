import { MapContainer, MapSearchBar } from "@/src/components";
import { calculatePrice } from "@/src/utils/calculatePrice";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Region } from "react-native-maps";

export default function AddressScreen() {
  const [destination, setDestination] = useState<Region | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handlePlaceSelected = (region: any) => setDestination(region);

  const handleDirectionsReady = (dist: number, dur: number) => {
    setDistance(dist);
    setPrice(calculatePrice(dist));
    setDuration(dur);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapContainer
        destination={destination}
        isRunning={isRunning}
        onDirectionsReady={handleDirectionsReady}
      />

      <View className="absolute top-10 w-full">
        <MapSearchBar onPlaceSelected={handlePlaceSelected} />
      </View>
      {destination && !isRunning && (
        <TouchableOpacity
          className="p-6 bg-primary items-center"
          onPress={() => setIsRunning(true)}
        >
          <Text className="text-white text-xl font-semibold">Começar Corrida</Text>
        </TouchableOpacity>
      )}

      {distance && price && duration && (
        <View className="w-full bg-tertiary p-20 flex justify-center items-center">
          <Text className="text-white text-lg font-medium">
            Distância: {distance.toFixed(2)} km
          </Text>
          <Text className="text-white text-lg font-medium">
            Tempo: {duration.toFixed(2)} min
          </Text>

          <Text className="p-3 bg-primary rounded-lg text-white text-xl font-semibold top-3">
            Preço: R${price.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}
