import { globalStyles } from "@/src/assets/styles/Global";
import { ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface Props {
	title: string;
	handlePress: ((event: GestureResponderEvent) => void);
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
}


export default function CustomButton({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}: Props) {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			disabled={isLoading}
			style={globalStyles.roundedRegular}
			className={`${containerStyles} ${isLoading ? "opacity-50" : ""} bg-secondary min-h-[52px] flex flex-row justify-center items-center `}
		>
			<Text style={globalStyles.heading2} className={`${textStyles} text-white`} >
				{title}
			</Text>

			{
				isLoading && (
					<ActivityIndicator
						animating={isLoading}
						color="#fff"
						size="small"
						className="ml-2"
					/>
				)
			}
		</TouchableOpacity >
	);
}
