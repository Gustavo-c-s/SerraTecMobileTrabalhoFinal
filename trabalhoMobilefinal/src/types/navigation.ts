import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Vitrini: undefined;
  Integrante: undefined;
  CardProduto: {lista:string};
};
export type HomeNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Home"
>;

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};
export type CardProdutoprops = {
  navigation: NativeStackNavigationProp<StackParamList, "CardProduto">;
  route: RouteProp<StackParamList, "CardProduto">;
};
export type VitriniScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Vitrini">;
  route: RouteProp<StackParamList, "Vitrini">;
};
