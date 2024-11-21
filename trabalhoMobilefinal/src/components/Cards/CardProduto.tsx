import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { CardProdutoprops } from "../../types/navigation";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type CardProduto= {
  lista:{
    id:string | number;
    nome:string;
    descricao:string;
    image:string;
    valor:string |Float;
  },
  deletarItem:(id:number|string)=>void
};
export default function CardProduto({ deletarItem,lista}:CardProduto) {

      return (
    <View style={style.container}>
      <Text>{lista.nome} - Nome Produto </Text>
      <Text>{lista.valor} - Valor Produto</Text>
      <Image style={style.box} source={{uri:lista.image}} />
      <Text>{lista.descricao} - Descrição</Text>
      <View>
        <TouchableOpacity>
          <Text>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletarItem(lista.id)}>
          <Text>✖</Text>
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