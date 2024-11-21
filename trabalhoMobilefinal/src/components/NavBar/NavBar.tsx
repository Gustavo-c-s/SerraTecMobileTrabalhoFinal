import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './NavBarStyle'

export default function NavBar() {
    return (
      <View style={styles.containerPrincipal}>
        <View style={styles.containerNavbar}>
          <Text style={styles.logo} >BEAR</Text>
          <View style={styles.icones}>
            <FontAwesome name="heart-o" size={19} color="black" />
            <AntDesign name="adduser" size={19} color="black" />
            <AntDesign name="deleteuser" size={19} color="black" />
            <SimpleLineIcons name="bag" size={19} color="black" />
            <MaterialCommunityIcons name="menu" size={19} color="black" />
          </View>
        </View>
      </View>
    );
  }