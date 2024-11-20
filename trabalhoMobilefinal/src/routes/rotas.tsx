import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";

import VitriniScreem from "../screens/VitriniScreen";
import NavBar from "../components/NavBar/NavBar";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <NavBar/>
    // <Navigator>
    //   <Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       title: "Gerenciador de Tarefas",
    //       //   headerShown: false,
    //     }}
    //   />

    //   <Screen name="Vitrini" component={VitriniScreem} />
    // </Navigator>
  );
};
