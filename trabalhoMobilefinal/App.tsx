
import CadastrarProduto from "./src/components/CadastrarProdudos";
import { Rotas } from "./src/routes/rotas";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}

