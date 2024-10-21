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
    async function getDonor() {
      const response = await fetch("http://192.168.3.27:3000/restaurants");
      const data = await response.json();
      setDonor(data);
    }

    getDonor();
  }, []);

  return (
    <View className="flex-1 w-full h-full mb-11 gap-4">
      {donor.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </View>
  );
}
