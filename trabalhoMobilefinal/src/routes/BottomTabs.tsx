import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsParamList } from "../types/navigation";
import VitriniScreem from "../screens/VitriniScreen";
import { HomeScreen } from "../screens/HomeScreen";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import Login from "../screens/Login";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () =>{
    return(
        <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          // Escolhe o ícone com base na rota
          if (route.name === "VitriniScreen") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "HomeScreen") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "help-circle-outline";
          }

          // Retorna o ícone do Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue", // Cor ativa
        tabBarInactiveTintColor: "gray", // Cor inativa
        tabBarStyle: { backgroundColor: "#f8f8f8" }, // Estilo da barra
      })}
    >
      <Tabs.Screen
        name="VitriniScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    <Tabs.Screen
        name="IntegrantesScreen"
        component={IntegrantesScreen}
        options={{ headerShown: false }}
      />

    <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    
    <Tabs.Screen
        name="Login"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    </Tabs.Navigator>
  );
};

export default BottomTabs;
