import { globalStyles } from "@/src/assets/styles/Global";
import { ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface Props {
	title: string;
	handlePress: ((event: GestureResponderEvent) => void);
	containerStyles?: string;
	isLoading?: boolean;
}


export default function CustomButton({
	title,
	handlePress,
	containerStyles,
	isLoading,
}: Props) {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-secondary min-h-[52px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""
				}`}
			disabled={isLoading}
			style={globalStyles.roundedRegular}
		>
			<Text className="text-white font-psemibold" style={globalStyles.textLarger}>
				{title}
			</Text>

			{isLoading && (
				<ActivityIndicator
					animating={isLoading}
					color="#fff"
					size="small"
					className="ml-2"
				/>
			)}
		</TouchableOpacity>
	);
}
