import { Image, Pressable, Text, View } from "react-native";
import { CardMenu, TabLayout } from "@components";
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

            <Link href={"/(menu)/notifications"} style={{ width: "100%" }}>
              <CardMenu
                color="bg-gray-700"
                iconName="notifications"
                iconSize={30}
                title="Notificações"
                titleColor="text-black"
                titleSize="text-xl"
              />
            </Link>

            <Link href={"/(menu)/address"} style={{ width: "100%" }}>
              <CardMenu
                color="bg-gray-700"
                iconName="location-sharp"
                iconSize={30}
                title="Localização"
                titleColor="text-black"
                titleSize="text-xl"
              />
            </Link>

            <Link href="/(menu)/termsOfUse" style={{ width: "100%" }}>
              <View className="w-full h-24 bg-gray-700 flex-row justify-between items-center px-5">
                <View className="flex-row gap-3 items-center">
                  <Ionicons name="newspaper" size={30} color={"#F58F00"} />

                  <Text className="text-lg font-semibold text-black">
                    Termos de uso
                  </Text>
                </View>

                <AntDesign name="right" size={30} />
              </View>
            </Link>

            {/* <Link
              href="/(menu)/termsOfUse"
              style={{ width: "100%" }}
              className="bg-blue-500 h-24 flex-row justify-between"
            >
              <View className="bg-red-600 h-24 flex-row items-center gap-3">
                <Ionicons name="add" size={30} color={"#F58F00"} />

                <Text
                  numberOfLines={2}
                  className="w-32 text-lg font-semibold text-black"
                >
                  TAAAAAAaaaaaaaaaaaaaaaaaaaaaa
                </Text>
              </View>

              <AntDesign name="right" size={30} />
            </Link> */}

            <Link href={"/(menu)/personalData"} style={{ width: "100%" }}>
              <CardMenu
                color="bg-gray-700"
                iconName="person-sharp"
                iconSize={30}
                title="Meus dados"
                titleColor="text-black"
                titleSize="text-xl"
              />
            </Link>
          </>
        ) : (
          <Text>Carregando usuário...</Text>
        )}
      </View>
    </TabLayout>
  );
}
