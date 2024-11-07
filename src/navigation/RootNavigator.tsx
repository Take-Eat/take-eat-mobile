import React from "react";
import { useAuth } from "../context/AuthContext";
import ApoiadorStack from "../app/(apoiador)/_layout";
import AdminStack from "../app/(admin)/_layout";
import DistribuidorStack from "../app/(distribuidor)/_layout";
import DoadorStack from "../app/(doador)/_layout";
import EntregadorStack from "../app/(entregador)/_layout";
import GuestHomeScreen from "@/src/app/(guest)/GuestHomeScreen";
import AuthLayout from "../app/(auth)/_layout";
import LoadingScreen from "../components/Globais/Loading";

function RootNavigator() {
  const { userType, loading } = useAuth();
  console.log("Current userType:", userType);

  if (loading) {
    return <LoadingScreen />;
  }

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

export default RootNavigator;
