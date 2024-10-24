import {
  View,
  Modal as RMModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type PROPS = ModalProps & {
  showModal: boolean;
  withInput?: boolean;
};

export default function Modal({
  showModal,
  withInput,
  children,
  ...rest
}: PROPS) {
  const content = withInput ? (
    <KeyboardAvoidingView
      className="justify-center items-center flex-1 bg-gray-300"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View>{children}</View>
  );

  return (
    <RMModal
      visible={showModal}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      {content}
    </RMModal>
  );
}
