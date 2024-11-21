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

export const Rotas = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        //  layout={NavBar}
      />

      <Screen name="Cadastroproduto" component={CadastrarProduto} />
      <Screen name="Cadastrousuario" component={CadastraUsuario} />
      <Screen name="Login" component={Login} />
      <Screen name="NavBar" component={NavBar} />
      <Screen name="Vitrini" component={VitriniScreem} />
      <Screen name="Integrante" component={IntegrantesScreen} />
      <Screen name="CardProduto" component={CardProduto} />
    </Navigator>
  );
};
