import {
  View,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import axios from "axios";
import { VitriniScreenProps } from "../types/navigation";
const URL = "";

export default function VitriniScreem({navigation}:VitriniScreenProps) {
  const [lista, setLista] = useState<any>([
    {
      id: "",
      name: "Tenis",
      valor: 2.5,
      image: 'https://midonstore.com/cdn/shop/files/2AA3B3C6-3196-4ACE-AA9F-25BF290CD1C0_1.jpg?v=1708305269&width=1179',
    },
  ]);
  const deletarItem = (id: number) => {
    console.log("Deletar Tarefa. Id: ", id);
    const listaFiltrada = lista.filter((item) => item.id !== id);
    setLista(listaFiltrada);
  };
    useEffect(() => {
      const obterDados = async () => {
        try {
          const { data } = await axios.get(URL);
          console.log("DADOS: ", data);
          setLista(data);
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
        renderItem={({ item, index }) => (
          <View>
          <CardProduto lista={item} deletarItem={deletarItem} />
          <Button
           title="ir para pagina detalhes do produto" 
           onPress={'ir para pagina detalhes do produto'}/>
          </View>
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
