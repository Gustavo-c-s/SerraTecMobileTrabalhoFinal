import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { InputEmail, InputSenha } from "../components/Input";
import { AuthContext } from "../components/Context/AuthContext";
import { LoginProps } from "../types/navigation";
import { getUsuraioLogin } from "../services/usuarioService";

export default function Login({ navigation }: LoginProps) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const { entrar } = useContext(AuthContext);
  const fazerLogin = async (login: string, senha: string) => {
    const usuarios = await getUsuraioLogin(login, senha);
    if (usuarios[0]) {
      entrar(usuarios[0]);
    }
    console.log(usuarios);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/54/c7/5c/54c75cfe882fde55d0d0a89604547ad8.jpg",
      }}
      style={style.backGround}
    >
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
        <TouchableOpacity style={style.tout} onPress={() => fazerLogin(login, senha)}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tout}
          onPress={() => navigation.navigate("Cadastrousuario")}
        >
          <Text style={style.buttonText}>Cria Conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  texto: {
    color: "white",
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    width: 250,
    height: 40,
    margin: 10,
    color: "white",
  },
  backGround: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  butoes: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 29,
    gap: 10,
    overflow: "hidden",
  },
  buttonText: {
    fontFamily: "Inter_400Regular",
    color: "white",
    fontSize: 16,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  tout:{
    margin:10
  }
});
