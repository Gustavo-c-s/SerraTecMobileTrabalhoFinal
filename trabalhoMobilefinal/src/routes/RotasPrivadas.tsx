import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";
import VitriniScreem from "../screens/VitriniScreen";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import CardProduto from "../components/Card/CardProduto";

import CadastraUsuario from "../components/Cadastro/CadastraUsuario";
import CadastrarProduto from "../components/Cadastro/CadastrarProdudos";

import NavBar from "../components/NavBar/NavBar";
import EditarProduto from "../components/Editar/EditarProduto";
import EditarUsuario from "../components/Editar/EditarUsuario";
// import NavBar from "../components/NavBar";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const RotasPrivadas = () => {
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

      <Screen name="Cadastroproduto" component={CadastrarProduto} 
       options={{
        headerTitle:''
      }}/>
      
      
      <Screen name="Vitrini" component={VitriniScreem} />
      <Screen name="Integrante" component={IntegrantesScreen} 
      options={{
        headerTitle:'KND - A Turma do Bairro'
      }}/>
      <Screen name="Editarproduto" component={EditarProduto} />
      <Screen name="Editarusuario" component={EditarUsuario} />
      <Screen name="CardProduto" component={CardProduto} />
    </Navigator>
  );
};