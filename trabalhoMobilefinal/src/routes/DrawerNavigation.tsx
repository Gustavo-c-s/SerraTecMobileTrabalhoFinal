import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "../types/navigation";
import BottomTabs from "./BottomTabs";
import Login from "../screens/Login";
import { HomeScreen } from "../screens/HomeScreen";
import IntegrantesScreen from "../screens/IntegrantesScreen";
import CadastrarProduto from "../screens/CadastroScreens/CadastrarProdudos";
import CadastraUsuario from "../screens/CadastroScreens/CadastraUsuario";
import EditarUsuario from "../screens/EditarScreens/EditarUsuario";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            {/* <Drawer.Screen 
                name="Login"
                component={Login}
                options={{title:"Login"}}
            /> */}
 
            {/* <Drawer.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{title:"Home"}}
            /> */}
            
            <Drawer.Screen 
                name="IntegrantesScreen"
                component={IntegrantesScreen}
                options={{title:"Integrantes"}}
            />

            <Drawer.Screen 
                name="CadastrarProduto"
                component={CadastrarProduto}
                options={{title:"Cadastro de Produtos"}}
            />
            
            <Drawer.Screen 
                name="EditarUsuario"
                component={EditarUsuario}
                options={{title:"Editar Usuário"}}
            />
        </Drawer.Navigator> 
    )
}
export default DrawerNavigator;
