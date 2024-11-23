import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";
import VitriniScreem from "../screens/VitriniScreen";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import CardProduto from "../screens/CardScreens/CardProduto";


import CadastrarProduto from "../screens/CadastroScreens/CadastrarProdudos";
import EditarProduto from "../screens/EditarScreens/EditarProduto";
import EditarUsuario from "../screens/EditarScreens/EditarUsuario";
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