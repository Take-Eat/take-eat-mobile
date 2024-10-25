import { Image, Pressable, Text, View } from "react-native";
import { Card, TabLayout } from "@components";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  role: string;
  image: string;
  isActive: boolean;
  createdAt: string;
}

export default function Menu() {
  const [user, setUser] = useState<UserProps | null>(null); // Inicializando com null

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/users`
      );
      const data = await response.json();
      setUser(data);
    }

    getUser();
  }, []);

  return (
    <TabLayout>
      <View className="gap-5">
        {user ? (
          <>
            <View className="flex-row w-full items-center justify-between px-2 mt-6">
              <View className="flex-row items-center gap-4">
                <Image
                  source={{ uri: user.image }}
                  className="w-24 h-24 rounded-full"
                />

                <View>
                  <Text
                    numberOfLines={2}
                    className="w-52 text-black text-xl font-semibold"
                  >
                    {user.name}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="w-52 font-extralight text-lg"
                  >
                    {user.email}
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => {
                  console.log("CLICOU EM SAIR");
                }}
              >
                <Text className="text-xl font-bold">Sair</Text>
              </Pressable>
            </View>

            <Link
              href={"/(menu)/termsOfUse"}
              className="w-full h-24 bg-gray-700"
            >
              <View className="flex-1 flex justify-between">
                <View className="flex-row">
                  <Ionicons name="newspaper" size={30} color={"#F58F00"} />

                  <Text className="text-lg font-semibold text-black">
                    Termos de uso
                  </Text>
                </View>

                <AntDesign name="right" size={30} />
              </View>
            </Link>
          </>
        ) : (
          <Text>Carregando usuário...</Text>
        )}
      </View>
    </TabLayout>
  );
}
