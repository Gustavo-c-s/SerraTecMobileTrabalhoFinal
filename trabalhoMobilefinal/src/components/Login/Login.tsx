import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { InputEmail, InputSenha } from "../Input";


export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {
    console.log(login, senha);
  };

  return (
    <View style={style.containerPrincipal}>
      <InputEmail  styleTexto={style.texto} styleInput={style.input}
       label="Login" value={login} setvalue={setLogin} />
      <InputSenha styleTexto={style.texto} styleInput={style.input}
      label="Senha" value={senha} setvalue={setSenha} />
      <Button 
      title="Entra" onPress={fazerLogin} />
    </View>
  );
}
const style = StyleSheet.create({
  containerPrincipal:{
   alignItems:'center',
   justifyContent:'center',
   alignSelf:'center',
   
  },
  texto:{
   alignItems:'center',
   justifyContent:'center',
   color:'black',
   fontFamily: 'Inter_400Regular',
  },
  input: {
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 1, 
    padding: 10,
    borderRadius: 10,
    borderColor:'black',
    width:'90%',
     height:'10%',
     margin: '3%',
     },
 });
 
