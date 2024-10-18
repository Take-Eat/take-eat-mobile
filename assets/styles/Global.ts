import { StyleSheet } from "react-native";

const colors = {
  whiteFixed: "#FFFFFF",
  brand0: "#443936",
  brand1: "#695854",
  brand2: "#927C77",
  brand3: "#FF9F1C",
  brand4: "#F58F00",
  gray0: "#0B0D0D",
  gray1: "#212529",
  gray2: "#495057",
  gray3: "#868E96",
  gray4: "#ADB5BD",
  gray5: "#CED4DA",
  gray6: "#DEE2E6",
  gray7: "#E9ECEF",
  gray8: "#F1F3F5",
  gray9: "#F8F9FA",
  gray10: "#FDFDFD",
  alert1: "#CD2B31",
  alert2: "#FDD8D8",
  alert3: "#FFE5E5",
  warning: "#ffcd07",
  success1: "#18794E",
  success2: "#CCEBD7",
  success3: "#DDF3E4",
  information: "#155bcb",
};

const fonts = {
  family: "Inter, sans-serif", // React Native não suporta fontes como em web; use uma fonte suportada ou baixe a fonte customizada
  heading1: 26, // Em React Native, as fontes são definidas em pontos, não em "rem"
  heading2: 22,
  heading3: 18,
  headline: 16,
  body: 14,
  caption: 12,
  bold: 800, // Largura da fonte pode ser definida com números ou palavras como 'bold'
  semiBold: 600,
  regular: 400,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.gray9,
  },
  heading1: {
    fontSize: fonts.heading1,
    color: colors.gray0,
  },
  heading2: {
    fontSize: fonts.heading2,
    color: colors.gray1,
  },
  button: {
    backgroundColor: colors.brand3,
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.whiteFixed,
    fontSize: fonts.body,
  },
  // Outros estilos globais podem ser adicionados aqui...
});

export { colors, fonts, globalStyles };
