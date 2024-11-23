import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./NavBarStyle";
import { AuthContext } from "../../components/Context/AuthContext";


export default function NavBar() {
  const { online, logout } = useContext(AuthContext);

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerNavbar}>
        <Text style={styles.logo}>BEAR</Text>
        {online ? (
          <View style={styles.icones}>
            <TouchableOpacity onPress={logout}>
              <Text>SAIR</Text>
            </TouchableOpacity>
            <FontAwesome name="heart-o" size={19} color="black" />
            <AntDesign name="adduser" size={19} color="black" />
            <AntDesign name="deleteuser" size={19} color="black" />
            <SimpleLineIcons name="bag" size={19} color="black" />
            <MaterialCommunityIcons name="menu" size={19} color="black" />
          </View>
        ) : (
          <View style={styles.icones}>
            <Text style={styles.texto}>Seja Bem Vindo</Text>
          </View>
        )}
      </View>
    </View>
  );
}
