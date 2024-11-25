import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

import { postUsuario } from "../../services/usuarioService";
import { InputEmail, InputSenha, InputTexto } from "../../components/Input";
import { AuthContext } from "../../components/Context/AuthContext";

export default function CadastraUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const { carregamento, setCarregamento } = useContext(AuthContext);

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
    setCarregamento(true);
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
      setCarregamento(false);
    } catch (error) {
      console.log("erro no post ", error);
    }
  };
  return (
    <View style={style.containerPrincipal}>
      {carregamento ? (
        <View>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <View>
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
          <TouchableOpacity style={style.bnt} onPressIn={cadastrar}>
            <Text style={style.texto}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginTop: 50,
    alignSelf: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: "4%",
  },
  texto: {
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "thin",
    padding: 10,
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
  bnt: {
    alignSelf: "center",
    width: "auto",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#e0e0e0",
    marginTop: 20,
  },
});
