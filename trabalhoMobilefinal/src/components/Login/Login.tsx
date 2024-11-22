import { Button, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { InputEmail, InputSenha } from "../Input";
import { AuthContext } from "../Context/AuthContext";
import { LoginProps } from "../../types/navigation";

export default function Login({navigation}:LoginProps) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const { entrar } = useContext(AuthContext);
  const fazerLogin = () => {
    console.log(login, senha);
  };

  return (
    <View style={style.containerPrincipal}>
      <InputEmail
        styleTexto={style.texto}
        styleInput={style.input}
        label="Login"
        value={login}
        setvalue={setLogin}
      />
      <InputSenha
        styleTexto={style.texto}
        styleInput={style.input}
        label="Senha"
        value={senha}
        setvalue={setSenha}
      />
      <Button title="Entra" onPress={() => entrar(login, senha)} />
      <Button
        title="Cria Conta"
        onPress={() => navigation.navigate("Cadastrousuario")}
      />
    </View>
  );
}
const style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
  },
  input: {
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    width: 250,
    height: 40,
    //   width: "90%",
    //dsf height: "10%",
    margin: "3%",
    fontSize: 15,
    color: "#000000",
  },
});
