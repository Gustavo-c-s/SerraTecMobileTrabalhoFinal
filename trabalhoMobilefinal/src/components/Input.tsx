import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { InputProps } from "../types/types";

type InputProps = {
  label: string;
  value: string;
  setvalue: (value: string) => void;
};

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
    <View>
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
    margin: 20,
    fontSize: 35,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  toggleButton: {
    padding: 10,
  },
});
