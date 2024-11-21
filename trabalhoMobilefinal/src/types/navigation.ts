import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  NavBar: undefined;
  Vitrini: undefined;
  Integrante: undefined;
  CardProduto: {
    lista: {
      id: string | number;
      nome: string;
      descricao: string;
      image: string;
      valor: string | Float;
    };
  };
};
export type HomeNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Home"
>;

export type NavBarProps = {
  navigation: NativeStackNavigationProp<StackParamList, "NavBar">;
};
export type IntegranteProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Integrante">;
};
export type CardProdutoprops = {
  navigation: NativeStackNavigationProp<StackParamList, "CardProduto">;
  route: RouteProp<StackParamList, "CardProduto">;
  deletarItem?: (id: number | string) => void;
};
export type VitriniScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Vitrini">;
  route: RouteProp<StackParamList, "Vitrini">;
};
