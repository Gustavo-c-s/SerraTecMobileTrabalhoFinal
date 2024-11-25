import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import  { useState } from "react";
import { InputProps } from "../types/types";

export function InputTexto({ styleTexto, styleInput , label, value, setvalue }: InputProps) {
  return (
    <View>
      <View>
        <Text style={styleTexto}>{label}</Text>
      </View>
      <TextInput
        style={ styleInput}
        value={value}
        onChangeText={setvalue}
        placeholder="Digite aqui..."
      />
    </View>
  );
}
export function InputSenha({ styleTexto, styleInput , label, value, setvalue }: InputProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <View>
      <View>
        <Text style={styleTexto}>{label}</Text>
      </View>
      <TextInput
        style={styleInput}
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

export function InputEmail({styleTexto, styleInput, label, value, setvalue }: InputProps) {
  return (
    <View>
      <View>
        <Text style={styleTexto}>{label}</Text>
      </View>
      <TextInput
        style={styleInput}
        value={value}
        onChangeText={setvalue}
        placeholder="Digite aqui..."
        keyboardType="email-address"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButton:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    position:'absolute',
    top:50,
    left:220
    },
});
