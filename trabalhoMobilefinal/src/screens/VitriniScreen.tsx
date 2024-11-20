import { View, FlatList, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";

import { VitriniScreenProps } from "../types/navigation";
import { deleteProduto, getProduto, postProduto } from "../services/produtosService";

export default function VitriniScreem({ navigation }: VitriniScreenProps) {
  const [lista, setLista] = useState<any>([
    {
      id: "1",
      name: "Tenis",
      valor: 200,
      image:
        "https://midonstore.com/cdn/shop/files/2AA3B3C6-3196-4ACE-AA9F-25BF290CD1C0_1.jpg?v=1708305269&width=1179",
    },
    {
      id: "2",
      name: "Tenis",
      valor: 250,
      image:
        "https://midonstore.com/cdn/shop/files/2AA3B3C6-3196-4ACE-AA9F-25BF290CD1C0_1.jpg?v=1708305269&width=1179",
    },
  ]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [image, setImage] = useState("");
  const deletarItem = async (id: number) => {
    try {
      const { data } = await deleteProduto(id);
      console.log("Deletar Tarefa. Id: ", id);
      const listaFiltrada = lista.filter((item) => item.id !== id);
      setLista(listaFiltrada);
    } catch (error) {
      console.log("error no delete.", error);
    }
  };

  const addProduto = async () => {
    if (nome == '' || descricao=='' || valor==''||image=='')return;
      const novoProduto = {
        nome: nome,
        descricao: descricao,
        valor: valor,
        image: image,
      };
      try{
       const enviaProduto = postProduto(novoProduto)
       console.log("post: ", enviaProduto);
       setLista([...lista,enviaProduto])
      }catch(error){
        console.log('erro no post ', error)
      }
  };

  useEffect(() => {
    const obterDados = async () => {
      try {
        const listaProduto = await getProduto();
        console.log("DADOS: ", listaProduto);
        setLista(listaProduto);
      } catch (error) {
        console.log("error no get.", error);
      }
    };
    obterDados();
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <View>
            <CardProduto lista={item} deletarItem={deletarItem} />
            <Button
              title="ir para pagina detalhes do produto"
              onPress={"ir para pagina detalhes do produto"}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
