import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React, { useContext } from "react";
import { CardProdutoprops } from "../../types/navigation";
import { deleteProduto } from "../../services/produtosService";
import { AuthContext } from "../../components/Context/AuthContext";
import { produto } from "../../types/types";

export default function CardProduto({ route, navigation }:CardProdutoprops) {
  const { item } = route.params;
  const {lista,setLista}=useContext(AuthContext)
  const deletarItem = async (id: number | string) => {
    try {
      const enviandoApi = await deleteProduto(id);
      const novaLista= lista.filter((i:produto)=>i.id!==enviandoApi.id);
      setLista(novaLista)
      console.log("Deletar Tarefa. Id: ", id, enviandoApi);
    } catch (error) {
      console.log("error no delete.", error);
    }
  };

  return (
    <View style={style.container}>
      <Text>{item.nome}</Text>
      <Text>R${item.valor}</Text>
      <Image style={style.box} source={{ uri: item.image }} />
      <Text>{item.descricao} </Text>
      <Button title="🗑" onPress={() => deletarItem(item.id)} />
      <Button
        title="🖊"
        onPress={() =>
          navigation.navigate("Editarproduto", {
            produto: item,
          })
        }
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 200,
    width: 200,
    // backgroundColor: "#7e00f3",
  },
});
