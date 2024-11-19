import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function CardProduto({ lista ,deletarItem}) {
      return (
    <View>
      <Text>{lista.name} - Nome Produto</Text>
      <Text>{lista.valor} - Valot Produto</Text>
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
      alignItems: "center",
    },
    box: {
      height: 200,
      width: 200,
      backgroundColor: "#7e00f3",
    },
  });