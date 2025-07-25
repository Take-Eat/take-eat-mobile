import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CardMenu, TabLayoutWithOutHeader } from "@components";
import { useRouter } from "expo-router";
import { globalStyles } from "@/src/assets/styles/Global";
import { useAuth } from "@/src/context/AuthContext";

export default function Menu() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Sair da Conta", "Deseja realmente sair da conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => {
          logout();
        },
      },
    ]);
  };

  return (
    <TabLayoutWithOutHeader>
      <View className="gap-5">
        {user ? (
          <>
            <View className="flex-row w-full items-center justify-between px-2 mt-6">
              <View className="flex-row items-center gap-4">
                <Image
                  source={{ uri: user.image }}
                  className="w-20 h-20"
                  style={globalStyles.roundedFull}
                />

                <View>
                  <Text
                    numberOfLines={2}
                    className="w-52 font-semibold"
                    style={globalStyles.textRegular}
                  >
                    {user.name}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="w-52"
                    style={globalStyles.textRegularGray}
                  >
                    {user.email}
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => {
                  handleLogout();
                }}
              >
                <Text style={globalStyles.textRegular}>Sair</Text>
              </Pressable>
            </View>

            <View className="w-full flex gap-3">
              <TouchableOpacity
                className="w-full"
                onPress={() => router.push("/(menu)/notifications")}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="notifications"
                  iconSize={25}
                  title="Notificações"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push("/(menu)/address")}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="location-sharp"
                  iconSize={25}
                  title="Localização"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push("/(menu)/termsOfUse")}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="newspaper"
                  iconSize={25}
                  title="Termos de uso"
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="w-full"
                onPress={() => router.push("/(menu)/personalData")}
              >
                <CardMenu
                  color="bg-gray-700"
                  iconName="person-sharp"
                  iconSize={25}
                  title="Meus dados"
                />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Carregando usuário...</Text>
        )}
      </View>
    </TabLayoutWithOutHeader>
  );
}
