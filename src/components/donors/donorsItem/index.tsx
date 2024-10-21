import { Image, Pressable, Text } from "react-native";

import { DonorProps } from "..";

export default function DonorsItem({ donor }: { donor: DonorProps }) {
  return (
    <Pressable
      className="flex flex-col rounded-xl"
      onPress={() => {
        console.log("CLICOU NO DOADOR " + donor.name);
      }}
    >
      <Image source={{ uri: donor.image }} className="w-20 h-20 rounded-full" />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {donor.name}
      </Text>
    </Pressable>
  );
}
