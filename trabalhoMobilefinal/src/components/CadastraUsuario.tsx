import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { InputEmail, InputSenha, InputTexto } from "./Input";
import { postUsuario } from "../services/usuarioService";

export default function CadastraUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");

  const cadastrar = async () => {
    if (nome == "" || email == "" || senha == "" || telefone == "") return;
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
    } catch (error) {
      console.log("erro no post ", error);
    }
  };
  return (
    <View style={style.container}>
      <Text>Cadastrar</Text>
      <InputTexto label="Nome: " value={nome} setvalue={setNome} />
      <InputEmail label="Email: " value={email} setvalue={setEmail} />
      <InputSenha label="Senha: " value={senha} setvalue={setSenha} />
      <InputTexto label="Telefone: " value={telefone} setvalue={setTelefone} />
      <InputTexto label="Tipo: " value={tipo} setvalue={setTipo} />
      <Button title="Enviar" onPress={cadastrar} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 0.1,
  },
});
