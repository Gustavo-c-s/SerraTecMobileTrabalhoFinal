import {
  View,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";

import { VitriniScreenProps } from "../types/navigation";
import {
  deleteProduto,
  getProduto,
  postProduto,
} from "../services/produtosService";
import { produto } from "../types/types";

export default function VitriniScreem({ navigation }: VitriniScreenProps) {
  const [lista, setLista] = useState<produto[]>([]);
  const [carregamento, setCarregamento] = useState(false);
  const deletarItem = async (id: number | string) => {
    try {
      const enviandoApi = await deleteProduto(id);
      console.log("Deletar Tarefa. Id: ", id);
      const listaFiltrada = lista.filter((item) => item.id !== enviandoApi.id);
      setLista(listaFiltrada);
    } catch (error) {
      console.log("error no delete.", error);
    }
  };

  // const addProduto = async () => {
  //   if (nome == "" || descricao == "" || valor == "" || image == "") return;
  //   const novoProduto = {
  //     nome: nome,
  //     descricao: descricao,
  //     valor: valor,
  //     image: image,
  //   };
  //   try {
  //     const enviaProduto = postProduto(novoProduto);
  //     console.log("post: ", enviaProduto);
  //     setLista([...lista, enviaProduto]);
  //   } catch (error) {
  //     console.log("erro no post ", error);
  //   }
  // };

  useEffect(() => {
    const obterDados = async () => {
      setCarregamento(true);
      try {
        setCarregamento(true);
        const listaProduto = await getProduto();
        console.log("DADOS: ", listaProduto);
        setLista(listaProduto);
        setCarregamento(false);
      } catch (error) {
        console.log("error no get.", error);
      }
    };
    obterDados();
  }, []);

  return (
    <View style={style.container}>
      {carregamento ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <View>
                <CardProduto
                  route={{ params: { lista: item } }}
                  deletarItem={deletarItem}
                />
                <Button
                  title="ir para pagina detalhes do produto"
                  onPress={() =>
                    navigation.navigate("CardProduto", { lista: item })
                  }
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
