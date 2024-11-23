import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { StackParamList } from "../types/navigation";
import CadastraUsuario from "../screens/CadastroScreens/CadastraUsuario";

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