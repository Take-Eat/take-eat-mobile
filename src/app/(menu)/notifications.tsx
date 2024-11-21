import { globalStyles } from "@/src/assets/styles/Global";
import { Card, Container } from "@/src/components";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

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
        `${process.env.EXPO_PUBLIC_API_MOCK}/restaurants`
      );
      const data = await response.json();
      setDonor(data);
    }

    getDonors();
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <FlatList
          data={donor}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <Card bgColor="bg-gray-700">
              <View className="flex-row items-center gap-3">
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16"
                  style={globalStyles.roundedFull}
                />

                <View>
                  <Text
                    className="font-semibold"
                    style={globalStyles.textRegular}
                  >
                    {item.name}
                  </Text>
                  <Text style={globalStyles.textSmallGray}>
                    precisa falar com você
                  </Text>
                </View>
              </View>

              <AntDesign name="right" size={25} />
            </Card>
          )}
        />
      </Container>
    </SafeAreaView>
  );
}
