import { View, Text, Image, StyleSheet } from "react-native";


type CardIntegrantesProps = {
  lista: {
    nome: string;
    image: string;
    frase: string;
  };
};
export default function CardIntegrantes({ lista }: CardIntegrantesProps) {
  return (
    <View style={style.container}>
      <Text style={style.texto}>{lista.nome}</Text>
      <Image
        style={style.box}
        source={{uri:lista.image}}
        alt="foto pessoal do grupo"
      />
      <Text style={style.frase}>{lista.frase}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingBottom:40
    
  },
  box: {
    borderRadius:100,
    height: 180,
    width: 180,
    margin:20
  },
  texto: {
    color: "black",
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 18,
  },
  frase: {
    color: "black",
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});
