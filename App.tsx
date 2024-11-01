// // Configuração da navegação principal com base no tipo de usuário

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { AuthProvider, useAuth } from "./src/context/AuthContext";
// import AuthStack from "./src/app/auth/AuthStack";
// import UserTabs from "./src/app/tabs/UserTabs";
// import AdminStack from "./src/app/admin/AdminStack";
// import GuestHomeScreen from "@/src/app/(guest)";

// function RootNavigator() {
//   const { userType } = useAuth();

//   if (userType === "user") {
//     return <UserTabs />;
//   } else if (userType === "admin") {
//     return <AdminStack />;
//   } else {
//     return <AuthStack />;
//   }
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }
