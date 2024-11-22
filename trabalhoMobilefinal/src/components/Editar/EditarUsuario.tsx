import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { updateUsuario } from "../../services/usuarioService";
import { Editarusuarioprops } from "../../types/navigation";
import { InputTexto } from "../Input";

export default function EditarUsuario(
  //{ route }: Editarusuarioprops
) {
  // const { usuario } = route.params;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const editarUsuario = async () => {
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
    } catch (error) {
      console.log("error no update.", error);
    }
  };

  return (
    <View>
      <InputTexto
        label={"nome"}
        value={nome}
        setvalue={setNome}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={"email"}
        value={email}
        setvalue={setEmail}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={"senha"}
        value={senha}
        setvalue={setSenha}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={"telefone"}
        value={telefone}
        setvalue={setTelefone}
        styleInput={""}
        styleTexto={""}
      />
      <Button title="Salvar" onPress={editarUsuario} />
    </View>
  );
}
