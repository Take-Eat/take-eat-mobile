import { ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface Props {
	title: string;
	handlePress: ((event: GestureResponderEvent) => void);
	containerStyles?: string;
	textStyles: string;
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
			className={`bg-secondary rounded-xl min-h-[40px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""
				}`}
			disabled={isLoading}
		>
			<Text className={`text-primary font-psemibold text-xl ${textStyles}`}>
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
