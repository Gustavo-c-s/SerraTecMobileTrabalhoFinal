import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
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
    lista: produto   
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
  route: Partial<RouteProp<StackParamList, "CardProduto">>;
};
export type Editarprodutoprops = {
  navigation: NativeStackNavigationProp<StackParamList, "CardProduto">;
  route: Partial<RouteProp<StackParamList, "CardProduto">>;
};
export type Editarusuarioprops = {
  navigation: NativeStackNavigationProp<StackParamList, "CardProduto">;
  route: Partial<RouteProp<StackParamList, "CardProduto">>;
};
export type VitriniScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Vitrini">;
  route: RouteProp<StackParamList, "Vitrini">;
};
