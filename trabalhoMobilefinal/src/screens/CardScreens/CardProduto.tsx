import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useContext } from "react";
import { CardProdutoprops } from "../../types/navigation";
import { deleteProduto } from "../../services/produtosService";
import { AuthContext } from "../../components/Context/AuthContext";
import { produto } from "../../types/types";

export default function CardProduto({ route, navigation }: CardProdutoprops) {
  const { item } = route.params;
  const { lista, setLista, carregamento, setCarregamento } =
    useContext(AuthContext);
  const deletarItem = async (id: number | string) => {
    setCarregamento(true);
    try {
      const enviandoApi = await deleteProduto(id);
      const novaLista = lista.filter((i: produto) => i.id !== enviandoApi.id);
      setLista(novaLista);
      console.log("Deletar Tarefa. Id: ", id, enviandoApi);
      Alert.alert("Produto deletado com sucesso!!");
      setCarregamento(false);
    } catch (error) {
      console.log("error no delete.", error);
    }
  };

  return (
    <View style={style.container}>
      {carregamento ? (
        <View>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <View>
          <View style={style.containerText}>
            <Text style={style.titulo}>{item.nome}</Text>
            <Image style={style.box} source={{ uri: item.image }} />
            <Text style={style.preco}>R${item.valor}</Text>
            <Text style={style.text}>{item.descricao} </Text>
          </View>
          <View style={style.containerButoes}>
            <View style={style.butoes}>
              <Button
                color="white"
                title="🗑"
                onPress={() => deletarItem(item.id)}
              />
              <Button
                color="white"
                title="🖊"
                onPress={() =>
                  navigation.navigate("Editarproduto", {
                    produto: item,
                  })
                }
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    height: 250,
    width: 290,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  containerText: {
    alignItems: "center",
    gap: 4,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    // fontWeight: 'bold',
    fontSize: 14,
  },
  titulo: {
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  preco: {
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 19,
    color: "red",
  },
  butoes: {
    width: 60,
    height: 40,
    flexDirection: "row",
    gap: 10,
  },
  containerButoes: {
    alignSelf: "flex-end",
    paddingTop: 20,
    paddingHorizontal: 63,
  },
});
