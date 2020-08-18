import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../config/color";

export default function Listseprator() {
  return <View style={styles.seprator} />;
}
const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: Colors.light,
  },
});
