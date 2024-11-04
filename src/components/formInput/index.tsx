import { globalStyles } from "@/src/assets/styles/Global";
import { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

interface Props {
	title: string;
	value: string;
	placeholder?: string;
	handleChangeText: (text: string) => void;
	otherStyles?: string;
	[key: string]: any;
}

export default function FormInput({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyles,
	...props
}: Props) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="mb-1 ml-2" style={globalStyles.heading2}>{title}</Text>
			<View className={`w-full h-14 px-4 bg-gray-600 border-b-2 border-gray-500 flex flex-row items-center ${!props.editable && "bg-gray-500"}`} style={globalStyles.roundedRegular}>
				<TextInput
					className={`flex-1 font-psemibold text-base`}
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7B7B8B"
					onChangeText={handleChangeText}
					secureTextEntry={title === "Password" && !showPassword}
					style={globalStyles.textRegular}
					{...props}
				/>

				{/* {title === "Password" && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image
							// source={!showPassword ? "=" : "-"}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)} */}
			</View>
		</View>
	);
}
