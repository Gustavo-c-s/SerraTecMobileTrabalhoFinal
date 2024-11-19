import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
    Home: undefined;
    Vitrini: undefined;
  };
  type HomeNavigationProps = NativeStackNavigationProp<StackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};

export type VitriniScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Vitrini">;
  route: RouteProp<StackParamList, "Vitrini">;
};
