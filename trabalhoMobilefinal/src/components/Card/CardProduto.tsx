import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";

import { CardProdutoprops } from "../../types/navigation";
import { deleteProduto } from "../../services/produtosService";

export default function CardProduto({ route, navigation }: CardProdutoprops) {
  const { lista } = route.params; // Para obter objeto "lista" da rota
  const deletarItem = async (id: number | string) => {
    try {
      const enviandoApi = await deleteProduto(id);
      console.log("Deletar Tarefa. Id: ", id, enviandoApi);
    } catch (error) {
      console.log("error no delete.", error);
    }
  };

  return (
    <View style={style.container}>
      <Text>{lista.nome}</Text>
      <Text>R${lista.valor}</Text>
      <Image style={style.box} source={{ uri: lista.image }} />
      <Text>{lista.descricao} </Text>
      <Button title="🗑" onPress={() => deletarItem(lista.id)} />
      <Button
        title="🖊"
        onPress={() =>
          navigation.navigate("Editarproduto", {
            produto: lista,
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
