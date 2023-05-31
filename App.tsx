import React from "react";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  WorkSans_400Regular,
  WorkSans_600SemiBold,
} from "@expo-google-fonts/work-sans";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";
import { Cadastro } from "./src/screens/Cadastro";
import { Alteracao } from "./src/screens/Alteracao";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    WorkSans_400Regular,
    WorkSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
