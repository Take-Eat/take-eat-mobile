import { globalStyles } from "@/src/assets/styles/Global";
import { Image, Pressable } from "react-native";

export interface BannerProps {
  id: number;
  image: string;
}

export default function BanerItem({ id, image }: BannerProps) {
  return (
    <Pressable
      className="w-80 h-36 md:h-60"
      style={globalStyles.roundedRegular}
      key="1"
      onPress={() => {
        console.log("CLICOU NO BANNER");
      }}
    >
      <Image
        key={id}
        source={{ uri: image }}
        className="w-full h-36 md:h-60"
        style={globalStyles.roundedRegular}
      />
    </Pressable>
  );
}
