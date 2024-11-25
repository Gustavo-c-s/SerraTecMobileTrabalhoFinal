import { View, FlatList, StyleSheet } from "react-native";
import CardIntegrantes from "./CardScreens/CardIntegrantes";
import { dados } from "../components/dadoIntegrantes";

export default function IntegrantesScreen() {

  return (
    <View style={style.container}>
      <View>
        <FlatList
        style={style.flast}
          data={dados}
          renderItem={({ item }) => <CardIntegrantes lista={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  flast:{
    marginTop:40
  }
});
