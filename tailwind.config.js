/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				primary: "#F58F00",
				secondary: {
					DEFAULT: "#FF9F1C",
					100: "#FF9F1C",
					200: "#FF9F1C",
				},
				tertiary: {
					DEFAULT: "#443936",
					100: "#695854",
					200: "#927C77",
				},
				gray: {
					DEAULT: "#0B0D0D",
					100: "#212529",
					200: "#495057",
					300: "#868E96",
					400: "#ADB5BD",
					500: "#CED4DA",
					600: "#DEE2E6",
					700: "#E9ECEF",
					800: "#F1F3F5",
					900: "#F8F9FA",
					1000: "#FDFDFD",
				},
				alert: {
					DEFAULT: "#CD2B31",
					100: "#FDD8D8",
					200: "#FFE5E5",
				},
				success: {
					DEFAULT: "#18794E",
					100: "#CCEBD7",
					200: "#DDF3E4",
				},
				info: "#155bcb",
			},
			fontFamily: {
				oregano: ["Oregano", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
