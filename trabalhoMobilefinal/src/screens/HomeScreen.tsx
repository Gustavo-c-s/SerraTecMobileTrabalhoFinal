import { View, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { HomeScreenProps } from "../types/navigation";
import VitriniScreem from "./VitriniScreen";
import { AuthContext } from "../components/Context/AuthContext";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {user}=useContext(AuthContext);
  return (
    <View style={style.corpo}>
     {/* <Login/> */}
       <VitriniScreem navigation={navigation}/>
      <View >
        <Button
          title="ir para Integrante"
          onPress={() => navigation.navigate("Integrante")}
        />
        <Button
          title="Cadastro produto"
          onPress={() => navigation.navigate("Cadastroproduto")}
        />
      </View>
        <Button
          title="editar usuario"
          onPress={() => navigation.navigate("Editarusuario",{usuario:user})}
        />
      
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
