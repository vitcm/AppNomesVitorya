import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import { Cadastro } from "../screens/Cadastro";
import { Alteracao } from "../screens/Alteracao";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false, // tira o cabeçalho com o título da pag
        tabBarActiveTintColor: theme.colors.rosa, //o menu que ficar ativo fica nessa cor
        tabBarInactiveTintColor: theme.colors.azul_escrita, // o menu que não estiver aberto fica nessa cor
        tabBarStyle: {
          height: 50,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        // options={{
        //   //coloca o símbolo ao lado do nome
        //   tabBarIcon: ({ size, color }) => <></>,
        // }}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { margin: 15 },
        }}
      />
      <Screen
        name="Cadastrar"
        component={Cadastro}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { margin: 15 },
        }}
      />
    </Navigator>
  );
}
