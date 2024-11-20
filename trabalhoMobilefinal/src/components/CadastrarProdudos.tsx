import { View, Text, Alert } from "react-native";
import { InputTexto } from "./Input";
import { useState } from "react";
import { Button } from "@react-navigation/elements";
import { postProduto } from "../services/produtosService";

export default function CadastrarProduto(){

    const [nome, setNome]=useState("")
    const [descricao, setDescricao]=useState("")
    const [valor, setValor]=useState("")
    const [image, setImage]=useState("")

    const CadastroProduto = async ()=>{
        if(nome == "" || descricao == "" || valor == "" || image == ""){
        Alert.alert("Favor verificar e preencher os campos corretamente!");
        return;
        }
        const novoCadastro ={
            nome:nome,
            descricao:descricao,
            valor:valor,
            image:image
        }
        try {
            const eviarProdutos = await postProduto(novoCadastro)
            console.log('Post executado', eviarProdutos)
        } catch (error) {
            console.log('Erro post produto', error)
        }
        //console.log(nome, descricao,valor, image)
    }

    return(
        <View>
            <Text>Castro Produtos</Text>
            
            <InputTexto 
            label="Nome Produto"
            value={nome}
            setvalue={setNome}            
            />
            
            <InputTexto 
            label="Descrição"
            value={descricao}
            setvalue={setDescricao}
            />

            <InputTexto 
            label="Preço"
            value={valor}
            setvalue={setValor}
            />

            <InputTexto
            label="Imagen"
            value={image}
            setvalue={setImage}
            />
            <Button onPressIn={CadastroProduto} >CADASTRAR PRODUDO</Button>
            
            </View>
    )
}