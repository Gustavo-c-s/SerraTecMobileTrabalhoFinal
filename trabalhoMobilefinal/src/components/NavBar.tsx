import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NavBar() {
  return (
    <View>
      <Text style={style.box}>NavBar</Text>
    </View>
  );
}
const style = StyleSheet.create({
  box: {
    height: 200,
    width: 200,
    backgroundColor: "#7e00f3",
  },
});
