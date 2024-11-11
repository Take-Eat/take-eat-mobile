const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Adiciona a configuração do NativeWind
const configWithNativeWind = withNativeWind(config, {
  input: "./src/styles/global.css",
});

// Adiciona as configurações para o react-native-svg-transformer
const { transformer, resolver } = configWithNativeWind;

configWithNativeWind.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};
configWithNativeWind.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = configWithNativeWind;
