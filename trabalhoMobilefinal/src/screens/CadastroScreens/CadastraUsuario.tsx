import {
  ActivityIndicator,
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { postUsuario } from "../../services/usuarioService";
import { InputEmail, InputSenha, InputTexto } from "../../components/Input";
import { AuthContext } from "../../components/Context/AuthContext";

export default function CadastraUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const { carregamento, setCarregamento } = useContext(AuthContext);

  const validarEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const cadastrar = async () => {
    if (nome == "" || email == "" || senha == "" || telefone == "") {
      Alert.alert("É necessario peencher todas as informações");
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert("E-mail inválido", `Você inseriu: ${email}`);
      return;
    }
    setCarregamento(true);
    const novoCadastro = {
      nome: nome,
      email: email,
      senha: senha,
      telefone: telefone,
      tipo: tipo,
    };
    try {
      const enviaUsuario = await postUsuario(novoCadastro);
      console.log("post: ", enviaUsuario);
      Alert.alert("🎉Cadastro realizado com sucesso!!🎊");
      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setTipo("");
      setCarregamento(false);
    } catch (error) {
      console.log("erro no post ", error);
    }
  };
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={style.containerPrincipal}>
      {carregamento ? (
        <View>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
          <View>
            <Text style={style.Cadastro}>Cadastrar</Text>
            <InputTexto
              styleTexto={style.texto}
              styleInput={style.input}
              label="Nome: "
              value={nome}
              setvalue={setNome}
            />
            <InputEmail
              styleTexto={style.texto}
              styleInput={style.input}
              label="Email: "
              value={email}
              setvalue={setEmail}
            />
            <InputSenha
              styleTexto={style.texto}
              styleInput={style.input}
              label="Senha: "
              value={senha}
              setvalue={setSenha}
            />
            <InputTexto
              styleTexto={style.texto}
              styleInput={style.input}
              label="Telefone: "
              value={telefone}
              setvalue={setTelefone}
            />
            <TouchableOpacity style={style.bnt} onPressIn={cadastrar}>
              <Text style={style.textobnt}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
      )}
    </View>
      </TouchableWithoutFeedback>
  );
}
const style = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  Cadastro: {
    marginTop: 50,
    alignSelf: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: "4%",
  },
  texto: {
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    fontFamily: "Inter_400Regular",
    fontWeight: "thin",
    padding: 10,
  },
  input: {
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    width: 250,
    height: 40,
  },
  bnt: {
    alignSelf: "center",
    width: "auto",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#080808",
    marginTop: 20,
    padding: 5,
    justifyContent: "center",
  },
  textobnt: {
    fontSize: 14,
    color: "white",
    fontFamily: "Inter_400Regular",
  },
});
