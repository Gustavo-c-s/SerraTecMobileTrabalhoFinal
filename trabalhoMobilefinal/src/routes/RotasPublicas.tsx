import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";
import VitriniScreem from "../screens/VitriniScreen";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import CardProduto from "../components/Card/CardProduto";

import CadastraUsuario from "../components/Cadastro/CadastraUsuario";
import CadastrarProduto from "../components/Cadastro/CadastrarProdudos";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar/NavBar";
// import NavBar from "../components/NavBar";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const RotasPublicas = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} 
      options={{
        headerShown: false,
      }}/>
      <Screen name='Cadastrousuario' component={CadastraUsuario}
      options={{
        headerTitle:''
      }}/>
    
    </Navigator>
  );
};