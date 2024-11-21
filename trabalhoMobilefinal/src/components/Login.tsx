import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { InputEmail, InputSenha } from "./Input";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {
    console.log(login, senha);
  };

  return (
    <View style={style.corpo}>
      <InputEmail label="Login" value={login} setvalue={setLogin} />
      <InputSenha label="Senha" value={senha} setvalue={setSenha} />
      <Button title="Entra" onPress={fazerLogin} />
    </View>
  );
}
const style = StyleSheet.create({
  corpo: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    margin: 5,
  },
});
