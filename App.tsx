import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import RootLayout from "./src/app/_layout";

export default function App() {
    console.log("App está sendo chamado!");
    
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}