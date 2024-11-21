import { View, Button , StyleSheet } from "react-native";
import React from "react";
import { HomeScreenProps } from "../types/navigation";
import CadastraUsuario from "../components/Cards/CadastraUsuario";
import Login from "../components/Login/Login";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.containerPrincipal}>
      <Login/>
      <CadastraUsuario/>
      <View>
        <Button
          title="ir para Vitrini"
          onPress={() => navigation.navigate("Vitrini")}
        />
        <Button
          title="ir para Integrante"
          onPress={() => navigation.navigate("Integrante")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
   flex:1,
   marginTop:'10%',
  },
});