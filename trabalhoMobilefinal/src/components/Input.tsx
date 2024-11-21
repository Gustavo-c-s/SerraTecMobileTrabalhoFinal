import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { InputProps } from "../types/types";



export function InputTexto({ label, value, setvalue }: InputProps) {
  return (
    <View>
      <View>
        <Text style={styles.texto}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setvalue}
        placeholder="Digite aqui..."
      />
    </View>
  );
}
export function InputSenha({ label, value, setvalue }: InputProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <View>
      <View>
        <Text style={styles.texto}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setvalue}
        placeholder="Digite aqui..."
        secureTextEntry={!mostrarSenha}
      />
      <TouchableOpacity
        onPress={() => setMostrarSenha(!mostrarSenha)}
        style={styles.toggleButton}
      >
        <Text>{mostrarSenha ? "👀" : "🙈"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function InputEmail({ label, value, setvalue }: InputProps) {
  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.texto}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setvalue}
        placeholder="Digite aqui..."
        keyboardType="email-address"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  conteiner:{
   
  },
  input: {
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  },
  toggleButton: {
    padding: 10,
  },
});
