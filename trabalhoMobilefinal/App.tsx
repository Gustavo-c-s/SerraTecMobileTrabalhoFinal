import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Rotas } from "./src/routes/rotas";

import AuthProvider from "./src/components/Context/AuthContext";
import NavBar from "./src/screens/NavBar/NavBar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavBar/>
        <Rotas />
      </AuthProvider>
    </NavigationContainer>
  );
}
