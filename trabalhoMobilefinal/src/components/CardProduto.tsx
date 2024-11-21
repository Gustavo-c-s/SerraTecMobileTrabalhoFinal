import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons"; // Se for usar ícones, pessoal
import { CardProdutoprops} from "../types/navigation";


export default function CardProduto({ route }: CardProdutoprops) {
  const {lista,deletarItem,}  = route.params // Para obter objeto "lista" da rota

  return (
    <View style={style.container}>
      <Text>{lista.nome}</Text>
      <Text>R${lista.valor}</Text>
      <Image style={style.box} source={{ uri: lista.image }} />
      <Text>{lista.descricao} </Text>
      <View>
        <TouchableOpacity onPress={() => deletarItem?.(lista.id)}>
          <Icon name="delete" size={24} color="red" />
          {/* // icone aqui */}
        </TouchableOpacity>
      </View>
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
