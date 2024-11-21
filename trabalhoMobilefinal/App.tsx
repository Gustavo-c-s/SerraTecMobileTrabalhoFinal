import NavBar from "./src/components/NavBar/NavBar";
import { Rotas } from "./src/routes/rotas";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NavBar/>
      <Rotas />
    </NavigationContainer>
  );
}
