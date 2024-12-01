import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import DonorsItem from "../donors/donorsItem";
import Item from "./item";

export interface DonorProps {
  id: string;
  name: string;
  image: string;
}

export default function DonorsList() {
  const [donor, setDonor] = useState<DonorProps[]>([]);

  useEffect(() => {
    async function getDonors() {
      const response = await fetch(
        `https://api-mock-take-eat.onrender.com/restaurants`
      );
      const data = await response.json();
      setDonor(data);
    }

    getDonors();
  }, []);

  return (
    <View className="flex-1 w-full h-full mb-11 gap-4">
      {donor.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </View>
  );
}
