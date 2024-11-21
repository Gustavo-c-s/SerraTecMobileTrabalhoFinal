import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./NavBarStyle";
import { NavBarProps, StackParamList } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function NavBar() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.containerPrincipal}>
        <View style={styles.containerNavbar}>
          <Text style={styles.logo}>BEAR</Text>
          <View style={styles.icones}>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <AntDesign name="adduser" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="deleteuser" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Integrante")}>
              <SimpleLineIcons name="bag" size={19} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="menu" size={19} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
