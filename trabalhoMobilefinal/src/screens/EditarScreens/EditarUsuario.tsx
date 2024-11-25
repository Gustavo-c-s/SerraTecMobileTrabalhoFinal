import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { InputTexto } from "../../components/Input";
import { updateUsuario } from "../../services/usuarioService";

export default function EditarUsuario() {
  const { user, carregamento, setCarregamento } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const editarUsuario = async () => {
    if (nome == "" || email == "" || senha == "" || telefone == "") {
      Alert.alert("É necessario peencher todas as informações");
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert("E-mail inválido", `Você inseriu: ${email}`);
      return;
    }
    setCarregamento(true);
    const usuarioEditado = {
      id: 2,
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      tipo: "",
    };
    try {
      const usuarioApi = await updateUsuario(usuarioEditado);
      console.log(usuarioApi);
      Alert.alert("Alterações salvas com sucesso!!");
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setCarregamento(false);
    } catch (error) {
      console.log("error no update.", error);
    }
  };

  return (
    <View style={style.containerPrincipal}>
      {carregamento ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <InputTexto
            label={"Nome: " + user.nome}
            value={nome}
            setvalue={setNome}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Email: " + user.email}
            value={email}
            setvalue={setEmail}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Senha: "}
            value={senha}
            setvalue={setSenha}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Telefone: " + user.telefone}
            value={telefone}
            setvalue={setTelefone}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <TouchableOpacity style={style.bnt} onPress={editarUsuario}>
            <Text style={style.textobnt}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    padding: 40,
  },
  texto: {
    fontSize: 15,
    color: "black",
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  input: {
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    width: 250,
    height: 40,
    margin: "3%",
    fontSize: 15,
    color: "#000000",
  },
  bnt: {
    alignSelf: "center",
    width: 80,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#000",
    marginTop: 20,
  },
  textobnt: {
    fontSize: 15,
    color: "white",
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
});
