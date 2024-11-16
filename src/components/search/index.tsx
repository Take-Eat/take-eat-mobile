import { globalStyles } from "@/src/assets/styles/Global";
import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

interface Props {
  /**
   * Função opcional executada ao clicar no botão de filtro.
   */
  handleOpen?: () => void;

  /**
   * Define se o botão de filtro será exibido.
   * @default false
   */
  filter?: boolean;
}

/**
 * Componente de barra de busca.
 *
 * Exibe uma barra de pesquisa com um botão de filtro opcional e um botão de pesquisa.
 * Ideal para interfaces que precisam de uma funcionalidade de busca.
 *
 * @param {Props} props - Propriedades do componente.
 * @param {() => void} props.handleOpen - Função executada ao pressionar o botão de filtro.
 * @param {boolean} props.filter - Controla a exibição do botão de filtro.
 *
 * @returns {JSX.Element} JSX do componente.
 */

export default function SearchBar({ handleOpen, filter }: Props) {
  return (
    <>
      <View className="w-full md:h-20 mt-3 flex flex-row items-center h-14 px-2 gap-4">
        {/* Botão de filtro, exibido apenas se 'filter' for verdadeiro */}
        {filter && (
          <Pressable onPress={handleOpen}>
            <Feather
              name="filter"
              size={25}
              color="#F58F00"
              className="flex-none"
            />
          </Pressable>
        )}

        {/* Campo de entrada de texto para pesquisa */}
        <View
          className="flex-1 p-10 py-4 bg-gray-700"
          style={globalStyles.roundedRegular}
        >
          <TextInput
            placeholder="Procure alimentos..."
            placeholderTextColor={"#000"}
            className="h-full flex-1"
            style={globalStyles.textRegular}
          />
        </View>

        {/* Botão de pesquisa */}
        <Pressable
          onPress={() => {
            console.log("CLICOU NO PESQUISAR");
          }}
        >
          <Feather name="search" size={25} color="#F58F00" />
        </Pressable>
      </View>
    </>
  );
}
