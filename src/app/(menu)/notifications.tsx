import { Card, Container } from "@/src/components";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export interface DonorProps {
  id: string;
  name: string;
  image: string;
}

export default function Notifications() {
  const [donor, setDonor] = useState<DonorProps[]>([]);

  useEffect(() => {
    async function getDonors() {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/restaurants`
      );
      const data = await response.json();
      setDonor(data);
    }

    getDonors();
  }, []);

  return (
    <View>
      <Container>
        <FlatList
          data={donor}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <Card height="h-20" bgColor="bg-gray-600">
              <View className="flex-row items-center gap-3">
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16 rounded-full"
                />

                <View>
                  <Text className="text-xl font-semibold">{item.name}</Text>
                  <Text>precisa falar com você</Text>
                </View>
              </View>

              <AntDesign name="right" size={20} />
            </Card>
          )}
        />
      </Container>
    </View>
  );
}
