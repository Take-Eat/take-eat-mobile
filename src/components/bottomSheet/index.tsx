import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  isVisible: boolean; // Controla a visibilidade
  children: React.ReactNode; // Conteúdo dinâmico
  snapPoints?: string[]; // Posições dinâmicas do snap
  onClose?: () => void; // Ação quando o BottomSheet for fechado
}

export default function CustomBottomSheet({
  isVisible,
  children,
  snapPoints = ["25%", "50%", "75%"], // Valores padrão
  onClose,
}: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Ação de mudança no BottomSheet
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log("handleSheetChanges", index);
      if (index === -1 && onClose) {
        onClose(); // Ação quando o BottomSheet é fechado
      }
    },
    [onClose]
  );

  const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

  // Abrir o BottomSheet quando `isVisible` mudar
  if (isVisible) {
    bottomSheetRef.current?.expand();
  } else {
    bottomSheetRef.current?.close();
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={memoizedSnapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      index={-1} // Mantém fechado inicialmente
    >
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
});
