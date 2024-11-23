import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { produto, usuario } from "./types";

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  NavBar: undefined;
  Vitrini: undefined;
  Integrante: undefined;
  Cadastrousuario: undefined;
  Cadastroproduto: undefined;
  CardProduto: {
    item: produto   
  };
  Editarproduto:{
    produto:produto
  };
  Editarusuario:{
    usuario:usuario
  }
};
export type HomeNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Home"
>;

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};

export type LoginProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Login">;
};
export type NavBarProps = {
  navigation: NativeStackNavigationProp<StackParamList, "NavBar">;
};
export type IntegranteProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Integrante">;
};
export type CardProdutoprops = {
  navigation: NativeStackNavigationProp<StackParamList, "CardProduto">;
  route: RouteProp<StackParamList, "CardProduto">;
};
export type Editarprodutoprops = {
  navigation: NativeStackNavigationProp<StackParamList, "Editarproduto">;
  route: RouteProp<StackParamList, "Editarproduto">;
};
export type Editarusuarioprops = {
  navigation: NativeStackNavigationProp<StackParamList, "Editarusuario">;
  route: Partial<RouteProp<StackParamList, "Editarusuario">>;
};
export type VitriniScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Vitrini">;
  route: RouteProp<StackParamList, "Vitrini">;
};
