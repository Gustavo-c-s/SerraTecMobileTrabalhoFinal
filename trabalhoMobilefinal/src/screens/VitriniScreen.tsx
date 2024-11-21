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
  updateProduto,
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

  const editarItem = async (item: produto) => {
    const itemEditado: produto = {
      id: item.id,
      nome: item.nome,
      descricao: item.descricao,
      image: item.image,
      valor: item.valor,
    };
    try {
      const itemApi = await updateProduto(itemEditado);
      console.log(itemApi);
      const ListaEditada = lista.map((item) => {
        if (item.id == itemEditado.id) {
          return itemEditado;
        }
        return item;
      });
    } catch (error) {
      console.log("error no update.", error);
    }
  };
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
                  editarItem={editarItem}
                />
                <Button
                  title="ir para pagina detalhes do produto"
                  onPress={() =>
                    navigation.navigate("CardProduto", {
                      lista: item,
                      editarItem: editarItem,
                    })
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
