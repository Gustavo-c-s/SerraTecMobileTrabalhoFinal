import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type InputProps={
  label:string;
  value:string;
  setvalue:undefined;

}

export default function Input({ label ,value,setvalue}:InputProps) {

  return (
    <View>
      <View>
        <Text style={styles.texto}>{label}</Text>;
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setvalue}
        placeholder="Aqui vai o meu placeholder"
      />
    </View>
  );
}

const styles = StyleSheet.create({
 
  texto: {
    margin: 20,
    fontSize: 35,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
