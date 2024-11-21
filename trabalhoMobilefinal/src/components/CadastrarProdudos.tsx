import { View, Text, Alert, ActivityIndicator } from "react-native";
import { InputTexto } from "./Input";
import { useState } from "react";
import { Button } from "@react-navigation/elements";
import { postProduto } from "../services/produtosService";
import axios from "axios";

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
          <Text>Castro Produtos</Text>

          <InputTexto 
          label="Nome Produto" 
          value={nome} 
          setvalue={setNome} />

          <InputTexto
            label="Descrição"
            value={descricao}
            setvalue={setDescricao}
          />

          <InputTexto label="Preço" value={valor} setvalue={setValor} />

          <InputTexto label="Imagen" value={image} setvalue={setImage} />
          <Button onPressIn={cadastroProduto}>CADASTRAR PRODUDO</Button>
        </View>
      )}
    </View>
  );
}
