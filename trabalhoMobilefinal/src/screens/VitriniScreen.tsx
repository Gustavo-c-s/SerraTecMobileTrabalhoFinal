import {
  View,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CardProduto from "./CardScreens/CardProduto";

import { VitriniScreenProps } from "../types/navigation";
import { getProduto } from "../services/produtosService";

import { AuthContext } from "../components/Context/AuthContext";

export default function VitriniScreem({ navigation }: VitriniScreenProps) {
  const {lista, setLista} = useContext(AuthContext);
  const [carregamento, setCarregamento] = useState(false);
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
  useEffect(() => {
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
                  route={{ params: { item: item } }}
                  navigation={navigation}
                />
                <Button
                  title="ir para pagina detalhes do produto"
                  onPress={() =>
                    navigation.navigate("CardProduto", {
                      item: item,
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
