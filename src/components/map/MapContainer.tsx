import MapView, { Region } from "react-native-maps";
import MapDirections from "./MapDirections";
import MapMarker from "./MapMarker";
import { useEffect, useRef, useState } from "react";
import { useRealTimeLocation } from "@/src/hooks/useRealTimeLocation";
import { Button, Modal, Text, View } from "react-native";
import { globalStyles } from "@/src/assets/styles/Global";
import { calculateDistance } from "@/src/hooks/calculateDistance";

interface MapContainerProps {
  destination: Region | null;
  isRunning: boolean;
  onDirectionsReady: (distance: number, duration: number) => void;
  handleResetEntrega: () => void;
}

export default function MapContainer({
  destination,
  isRunning,
  onDirectionsReady,
  handleResetEntrega,
}: MapContainerProps) {
  const { location, heading } = useRealTimeLocation(); // Posição atualizada em tempo real
  const mapRef = useRef<MapView>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Define uma região inicial padrão para evitar mostrar os continentes
  const defaultRegion: Region = {
    latitude: -23.55052, // Exemplo: São Paulo
    longitude: -46.633308,
    latitudeDelta: 0.05, // Zoom aproximado
    longitudeDelta: 0.05,
  };

  // Detecta proximidade ao destino
  useEffect(() => {
    if (destination && location) {
      const distance = calculateDistance(location, destination);
      if (distance < 20) {
        setModalVisible(true);
      }
    }
  }, [location, destination]);

  // Centraliza o mapa na localização do usuário ao carregar
  useEffect(() => {
    if (location) {
      mapRef.current?.animateToRegion(
        {
          ...location,
          latitudeDelta: 0.01, // Zoom ajustado para proximidade
          longitudeDelta: 0.01,
        },
        1000
      );
    }
  }, [location]);

  // Ajustar a câmera durante a corrida
  useEffect(() => {
    if (isRunning && location && heading) {
      mapRef.current?.animateCamera(
        {
          center: location,
          pitch: 40,
          zoom: 19,
          altitude: 100,
          heading: heading,
        },
        { duration: 1000 }
      );
    }
  }, [isRunning, location, heading]);

  return (
    <>
      <MapView
        showsUserLocation={true}
        style={{ flex: 1 }}
        ref={mapRef}
        initialRegion={location || defaultRegion} // Usa a localização ou a região padrão
        followsUserLocation
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

      {/* Modal de confirmação */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-gray-500">
          <View className="gap-2 w-80 p-5 bg-white items-center">
            <Text className="text-center mb-3" style={globalStyles.heading1}>
              Você chegou ao destino!
            </Text>
            <Button
              title="Confirmar Entrega"
              onPress={() => {
                setModalVisible(false);
                // Ação ao confirmar entrega
                console.log("Entrega confirmada!");
                handleResetEntrega;
              }}
            />
            <Button
              title="Cancelar"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
