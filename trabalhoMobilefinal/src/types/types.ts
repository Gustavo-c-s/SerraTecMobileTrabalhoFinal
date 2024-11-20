import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type produto = {
  id: number | string;
  nome: string;
  descricao: string;
  image: string;
  valor: string | Float;
};
export type usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  tipo: string;
};
