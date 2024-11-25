import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { useContext, useEffect } from "react";
import CardProduto from "./CardScreens/CardProduto";

import { VitriniScreenProps } from "../types/navigation";
import { getProduto } from "../services/produtosService";

import { AuthContext } from "../components/Context/AuthContext";

export default function VitriniScreem({ navigation }: VitriniScreenProps) {
  const { lista, setLista, carregamento, setCarregamento } =
    useContext(AuthContext);

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
            style={style.flast}
            data={lista}
            renderItem={({ item }) => (
              <View>
                <CardProduto
                  route={{ params: { item: item} }}
                  navigation={navigation}
                />
                <TouchableOpacity
                  style={style.touchable}
                  onPress={() =>
                    navigation.navigate("CardProduto", {
                      item: item,
                    })
                  }
                >
                  <Text style={style.buttonText}>Produto</Text>
                </TouchableOpacity>
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
    backgroundColor: "white",
  },
  touchable: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 0,
    width: 100,
    height: 50,
    marginHorizontal: 40,
    marginVertical: 30,
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "Inter_400Regular",
    fontWeight: 600,
    color: "white",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 16,
  },
  flast: {
    marginTop: 40,
  },
});
