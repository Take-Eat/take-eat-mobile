import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import DonorsItem from "./donorsItem";

export interface DonorProps {
  id: string;
  name: string;
  image: string;
}

export default function Donors() {
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
    <FlatList
      data={donor}
      renderItem={({ item }) => <DonorsItem donor={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
