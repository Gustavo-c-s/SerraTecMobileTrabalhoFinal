import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { InputEmail, InputSenha, InputTexto } from "./Input";
import { postUsuario } from "../services/usuarioService";

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
    <View>
      <Text>Cadastrar</Text>
      <InputTexto stylesText={style.texto} stylesinput={style.input} label="Nome: " value={nome} setvalue={setNome} />
      <InputEmail stylesText={style.texto} stylesinput={style.input} label="Email: " value={email} setvalue={setEmail} />
      <InputSenha stylesText={style.texto} stylesinput={style.input} label="Senha: " value={senha} setvalue={setSenha} />
      <InputTexto stylesText={style.texto} stylesinput={style.input} label="Telefone: " value={telefone} setvalue={setTelefone} />
      <Button title="Enviar" onPress={cadastrar} />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  input: {
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  },
  texto: {
    margin: 10,
    fontSize: 10,
    
  },
});
