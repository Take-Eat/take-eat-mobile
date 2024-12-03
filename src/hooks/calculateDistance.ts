import { Region } from "react-native-maps";

export const calculateDistance = (loc1: Region, loc2: Region) => {
  const R = 6371e3; // Raio da Terra em metros
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const dLat = toRadians(loc2.latitude - loc1.latitude);
  const dLon = toRadians(loc2.longitude - loc1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(loc1.latitude)) *
      Math.cos(toRadians(loc2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distância em metros
};
