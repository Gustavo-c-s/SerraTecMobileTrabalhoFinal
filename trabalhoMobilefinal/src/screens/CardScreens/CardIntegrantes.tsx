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
      <Text >{lista.nome}</Text>
      <Image
        style={style.box}
        source={{uri:lista.image}}
        alt="foto pessoal do grupo"
      />
      <Text>{lista.frase}</Text>
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
    height: 200,
    width: 200,
    margin:20
  },
});
