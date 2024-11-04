// Configuração da navegação principal com base no tipo de usuário

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import ApoiadorStack from "./src/app/(apoiador)/_layout";
import AdminStack from "./src/app/(admin)/_layout";
import DistribuidorStack from "./src/app/(distribuidor)/_layout";
import DoadorStack from "./src/app/(doador)/_layout";
import EntregadorStack from "./src/app/(entregador)/_layout";
import GuestHomeScreen from "@/src/app/(guest)/GuestHomeScreen";
import AuthLayout from "./src/app/(auth)/_layout";

function RootNavigator() {
  const { userType } = useAuth();

  if (userType === "apoiador") {
    return <ApoiadorStack />;
  } else if (userType === "admin") {
    return <AdminStack />;
  } else if (userType === "distribuidor") {
    return <DistribuidorStack />;
  } else if (userType === "doador") {
    return <DoadorStack />;
  } else if (userType === "entregador") {
    return <EntregadorStack />;
  } else if (userType === "guest") {
    return <GuestHomeScreen />;
  } else {
    return <AuthLayout />;
  }
}

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}
