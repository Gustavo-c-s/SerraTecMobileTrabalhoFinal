import { View, Text, Alert, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

import { useContext, useState } from "react";
import { Button } from "@react-navigation/elements";
import { postProduto } from "../../services/produtosService";
import { InputTexto } from "../../components/Input";
import { AuthContext } from "../../components/Context/AuthContext";

export default function CadastrarProduto() {
  const [carregando, setCarregando] = useState(false);
  const {lista,setLista}=useContext(AuthContext)
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
      setLista([...lista,eviarProdutos])
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
    <View style={style.containerPrincipal}>
      {carregando ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={style.containerPrincipal}>
          <Text style={style.Cadastro}>Cadastro de Produto</Text>

          <InputTexto
            styleTexto={style.texto}
            styleInput={style.input}
            label="Nome do Produto:"
            value={nome}
            setvalue={setNome}
          />

          <InputTexto
           styleTexto={style.texto}
           styleInput={style.input}
            label="Descrição:"
            value={descricao}
            setvalue={setDescricao}
          />

          <InputTexto
            styleTexto={style.texto}
            styleInput={style.input}
            label="Preço:"
            value={valor}
            setvalue={setValor}
          />

          <InputTexto
            styleTexto={style.texto}
            styleInput={style.input}
            label="Imagen:"
            value={image}
            setvalue={setImage}
          />
          <TouchableOpacity style={style.bnt} onPressIn={cadastroProduto}>
            <Text style={style.texto}>CADASTRAR</Text>
          </TouchableOpacity>
         
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({

  Cadastro: {
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "thin",
    fontSize: 25,
    marginBottom: "4%",
    alignSelf: "center",
  },
  containerPrincipal: {
    flex: 1,
    padding: 20,
   
  },
  texto: {
    fontSize: 15,
    color: "black",
    fontFamily: "Inter_400Regular",
    textAlign:'center'
    
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
  bnt:{
    alignSelf:'center',
    width:'auto',
    height:40,
    borderRadius:10,
    borderWidth:2,
    backgroundColor:"#ebe5e5",
    marginTop:20,
    padding:5
  }
});
