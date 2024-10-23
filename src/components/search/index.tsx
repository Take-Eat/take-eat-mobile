import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import Modal from "../modal";
import { useState } from "react";

export function SearchBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View className="w-full md:h-60 mt-3 flex flex-row items-center h-14 px-2 gap-4">
        <Pressable
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Feather
            name="filter"
            size={30}
            color="#F58F00"
            className="flex-none"
          />
        </Pressable>

        <View className="flex-1 p-10 py-4 rounded-2xl bg-slate-100">
          <TextInput
            placeholder="Procure alimentos..."
            className="w-full h-full flex-1"
          />
        </View>

        <Pressable
          onPress={() => {
            console.log("CLICOU NO PESQUISAR");
          }}
        >
          <Feather name="search" size={30} color="#F58F00" />
        </Pressable>
      </View>
      <Modal showModal={showModal}>
        <View className="bg-gray-700 items-center justify-center p-4 rounded-xl">
          <Text>Modal</Text>
          <Pressable
            onPress={() => {
              setShowModal(false);
            }}
          >
            <Feather name="x" size={35} color="#F58F00" />
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
