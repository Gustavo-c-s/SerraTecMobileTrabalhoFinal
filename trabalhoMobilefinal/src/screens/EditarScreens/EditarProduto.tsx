import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { Editarprodutoprops } from "../../types/navigation";
import { updateProduto } from "../../services/produtosService";
import { InputTexto } from "../../components/Input";
import { AuthContext } from "../../components/Context/AuthContext";
import { produto } from "../../types/types";
import { Text } from "@react-navigation/elements";

export default function EditarProduto({ route }: Editarprodutoprops) {
  const { produto } = route.params;
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [image, setImage] = useState("");
  const { lista, setLista, carregamento, setCarregamento } =
    useContext(AuthContext);
  const editarItem = async () => {
    if (nome == "" || descricao == "" || valor == "" || image == "") {
      Alert.alert("Favor verificar e preencher os campos corretamente!");
      return;
    }
    setCarregamento(true);
    const itemEditado: produto = {
      id: produto.id,
      nome: nome,
      descricao: descricao,
      image: image,
      valor: valor,
    };
    try {
      const itemApi = await updateProduto(itemEditado);
      console.log(itemApi);
      const novaLista = lista.map((i: produto) =>
        i.id === itemApi.id ? itemApi : i
      );
      setLista(novaLista);
      Alert.alert("Alterações salvas com sucesso!!");
      setNome("");
      setDescricao("");
      setValor("");
      setImage("");
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
        <View >
          <InputTexto
            label={"Nome: " + produto.nome}
            value={nome}
            setvalue={setNome}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Valor: R$" + produto.valor}
            value={valor}
            setvalue={setValor}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Imagem: " + produto.image}
            value={image}
            setvalue={setImage}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <InputTexto
            label={"Descrição: " + produto.descricao}
            value={descricao}
            setvalue={setDescricao}
            styleInput={style.input}
            styleTexto={style.texto}
          />
          <TouchableOpacity style={style.bnt} onPress={editarItem}>
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
    padding: 34,
    backgroundColor:'white',
  },
  texto: {
    fontSize: 15,
    color: "black",
    fontFamily: "Inter_400Regular",
    // fontWeight:'bold',
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
    height:30,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#000",
    marginTop: 20,
  },
  textobnt: {
    fontSize: 14,
    color: "white",
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
});
