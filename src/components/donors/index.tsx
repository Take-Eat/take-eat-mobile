import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import DonorsItem from "./donorsItem";

export interface DonorProps {
  id: string;
  name: string;
  image: string;
}

export function Donors() {
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
    <FlatList
      data={donor}
      renderItem={({ item }) => <DonorsItem donor={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
