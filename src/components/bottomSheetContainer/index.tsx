import { globalStyles } from "@/src/assets/styles/Global";
import { ReactElement, ReactNode } from "react";
import { Text, View } from "react-native";

interface Props {
    title?: string;
    customHeader?: ReactElement;
    children: ReactNode;
}


export default function BottomSheetContainer({ customHeader, children, title }: Props) {

    return (
        <View>
            {
                customHeader ? customHeader : <Text style={globalStyles.heading1} className="text-center">{title}</Text>
            }

            {children}
        </View>
    )
}