import { View, Text, Alert, ActivityIndicator, StyleSheet } from "react-native";
import { InputTexto } from "./Input";
import { useState } from "react";
import { Button } from "@react-navigation/elements";
import { postProduto } from "../services/produtosService";

export default function CadastrarProduto() {
  const [carregando, setCarregando] = useState(false);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [image, setImage] = useState("");

  const cadastroProduto = async () => {
    if (nome == "" || descricao == "" || valor == "" || image == "") {
      Alert.alert("Favor verificar e preencher os campos corretamente!");
      return;
    }
    setCarregando(true);
    const novoCadastro = {
      nome: nome,
      descricao: descricao,
      valor: valor,
      image: image,
    };
    try {
      const eviarProdutos = await postProduto(novoCadastro);
      console.log("Produto cadastrado", eviarProdutos);
      setCarregando(false);
      Alert.alert("Cadastro realizado com sucesso!");
      setNome("");
      setDescricao("");
      setValor("");
      setImage("");
    } catch (error) {
      console.log("Erro post produto", error);
    }
    //console.log(nome, descricao,valor, image)
  };
  return (
    <View>
      {carregando ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <Text>Cadastro de Produtos</Text>

          <InputTexto
            // stylesText={}
            // stylesinput={}
            label="Nome Produto"
            value={nome}
            setvalue={setNome}
          />

          <InputTexto
            // stylesText={}
            // stylesinput={}
            label="Descrição"
            value={descricao}
            setvalue={setDescricao}
          />

          <InputTexto
            // stylesText={}
            // stylesinput={}
            label="Preço"
            value={valor}
            setvalue={setValor}
          />

          <InputTexto
            // stylesText={}
            // stylesinput={}
            label="Imagen"
            value={image}
            setvalue={setImage}
          />
          <Button onPressIn={cadastroProduto}>CADASTRAR PRODUDO</Button>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({});
