import { StyleProp, TextStyle } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type produto={
    id:number | string;
    nome:string;
    descricao:string;
    image:string;
    valor:string | Float;
}
export type usuario ={
    id: number;
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    tipo: string,
}
export type InputProps={
    stylesText: StyleProp<TextStyle>;
    stylesinput: StyleProp<TextStyle>
    label:string;
    value:string;
    setvalue:(value:string)=>void;
  
}
