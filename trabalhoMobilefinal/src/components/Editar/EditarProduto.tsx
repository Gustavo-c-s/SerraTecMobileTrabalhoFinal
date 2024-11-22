import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { InputTexto } from "../Input";

import { updateProduto } from "../../services/produtosService";
import { Editarprodutoprops } from "../../types/navigation";

export default function EditarProduto({ route }: Editarprodutoprops) {
  const { produto } = route.params;
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [image, setImage] = useState("");

  const editarItem = async () => {
    const itemEditado = {
      id: produto.id,
      nome: nome,
      descricao: descricao,
      image: image,
      valor: valor,
    };
    try {
      const itemApi = await updateProduto(itemEditado);
      console.log(itemApi);
    } catch (error) {
      console.log("error no update.", error);
    }
  };

  return (
    <View>
      <InputTexto
        label={produto.nome}
        value={nome}
        setvalue={setNome}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={produto.valor}
        value={valor}
        setvalue={setValor}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={produto.image}
        value={produto.image}
        setvalue={setImage}
        styleInput={""}
        styleTexto={""}
      />
      <InputTexto
        label={produto.descricao}
        value={descricao}
        setvalue={setDescricao}
        styleInput={""}
        styleTexto={""}
      />
      <Button title="Salvar" onPress={editarItem} />
    </View>
  );
}
