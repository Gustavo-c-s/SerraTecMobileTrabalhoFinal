import { View, Button, StyleSheet } from "react-native";
import React from "react";

import Login from "../components/Login";
import CadastraUsuario from "../components/Cadastro/CadastraUsuario";
import CadastrarProduto from "../components/Cadastro/CadastrarProdudos";
import NavBar from "../components/NavBar/NavBar";
import { HomeScreenProps } from "../types/navigation";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={style.corpo}>
     {/* <Login/> */}
      <View >
        <Button
          title="ir para Vitrini"
          onPress={() => navigation.navigate("Vitrini")}
        />
        <Button
          title="ir para Integrante"
          onPress={() => navigation.navigate("Integrante")}
        />
        <Button
          title="Cadastro usuario"
          onPress={() => navigation.navigate("Cadastrousuario")}
        />
        <Button
          title="Cadastro produto"
          onPress={() => navigation.navigate("Cadastroproduto")}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  corpo: {
    flex: 1,
    textAlign:'center',
    alignSelf:'center'
  },

});
