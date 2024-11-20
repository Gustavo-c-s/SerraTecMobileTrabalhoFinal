import { Button, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { InputSenha, InputTexto } from "./Input";
import CadastraUsuario from "./CadastraUsuario";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {
    console.log(login, senha);
  };

  return (
    <View>
      <InputTexto label="Login" value={login} setvalue={setLogin} />
      <InputSenha label={"Senha"} value={senha} setvalue={setSenha} />
      <Button title="entra" onPress={fazerLogin} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
