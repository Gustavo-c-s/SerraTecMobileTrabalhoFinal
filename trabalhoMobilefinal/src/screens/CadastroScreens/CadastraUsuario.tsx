import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { postUsuario } from "../../services/usuarioService";
import { InputEmail, InputSenha, InputTexto } from "../../components/Input";

export default function CadastraUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const cadastrar = async () => {
    if (!validarEmail(email)) {
      Alert.alert("E-mail inválido", `Você inseriu: ${email}`);
      return;
    }
    if (nome == "" || email == "" || senha == "" || telefone == "") {
      Alert.alert("É necessario peencher todas as informações");
      return;
    }
    const novoCadastro = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      tipo: tipo,
    };
    try {
      const enviaUsuario = await postUsuario(novoCadastro);
      console.log("post: ", enviaUsuario);
      Alert.alert("🎉Cadastro realizado com sucesso!!🎊");
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setTipo("");
    } catch (error) {
      console.log("erro no post ", error);
    }
  };
  return (
    <View style={style.containerPrincipal}>
      <Text style={style.Cadastro}>Cadastrar</Text>
      <InputTexto
        styleTexto={style.texto}
        styleInput={style.input}
        label="Nome: "
        value={nome}
        setvalue={setNome}
      />
      <InputEmail 
        styleTexto={style.texto}
        styleInput={style.input}
        label="Email: "
        value={email}
        setvalue={setEmail}
      />
      <InputSenha
        styleTexto={style.texto}
        styleInput={style.input}
        label="Senha: "
        value={senha}
        setvalue={setSenha}
      />
      <InputTexto
        styleTexto={style.texto}
        styleInput={style.input}
        label="Telefone: "
        value={telefone}
        setvalue={setTelefone}
      />
      <Button title="Enviar" onPress={cadastrar} />
    </View>
  );
}
const style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  Cadastro: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "thin",
    fontSize: 25,
    marginBottom: "4%",
  },
  texto: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "thin",
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
  },
});
