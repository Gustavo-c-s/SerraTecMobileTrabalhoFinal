import { View, StyleSheet } from "react-native";
import { HomeScreenProps } from "../types/navigation";
import VitriniScreem from "./VitriniScreen";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={style.corpo}>
      <VitriniScreem navigation={navigation} />
    </View>
  );
};
const style = StyleSheet.create({
  corpo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  butoes: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 29,
    gap: 10,
    overflow: "hidden",
  },
});
