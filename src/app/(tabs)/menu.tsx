import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { CardMenu, TabLayout } from "@components";
import { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
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

  const router = useRouter()

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

            <View className="w-full flex gap-3">
              <TouchableOpacity
                className="w-full"
                onPress={() => router.push('/(menu)/notifications')}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="notifications"
                  iconSize={30}
                  title="Notificações"
                  titleColor="text-black"
                  titleSize="text-xl"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push('/(menu)/address')}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="location-sharp"
                  iconSize={30}
                  title="Localização"
                  titleColor="text-black"
                  titleSize="text-xl"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push('/(menu)/termsOfUse')}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="newspaper"
                  iconSize={30}
                  title="Termos de uso"
                  titleColor="text-black"
                  titleSize="text-xl"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push('/(menu)/personalData')}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="person-sharp"
                  iconSize={30}
                  title="Meus dados"
                  titleColor="text-black"
                  titleSize="text-xl"
                />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Carregando usuário...</Text>
        )}
      </View>
    </TabLayout>
  );
}
