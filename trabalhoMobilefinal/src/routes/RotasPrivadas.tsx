import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../types/navigation";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import CardProduto from "../screens/CardScreens/CardProduto";
import CadastrarProduto from "../screens/CadastroScreens/CadastrarProdudos";
import EditarProduto from "../screens/EditarScreens/EditarProduto";
import EditarUsuario from "../screens/EditarScreens/EditarUsuario";
import DrawerNavigator from "./DrawerNavigation";


const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const RotasPrivadas = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Cadastroproduto"
        component={CadastrarProduto}
        options={{
          headerTitle: "",
        }}
      />

      <Screen name="Vitrini" component={DrawerNavigator} />
      <Screen
        name="Integrante"
        component={IntegrantesScreen}
        
      />
      <Screen name="Editarproduto" component={EditarProduto}
       options={{
        headerTitle: " Editar Produto",
      }}
      />
      <Screen name="Editarusuario" component={EditarUsuario} />
      <Screen name="CardProduto" component={CardProduto} 
      options={{
        headerTitle: "Produto",
      }}/>
    </Navigator>
  );
};
