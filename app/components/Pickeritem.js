import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function Pickeritem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  container: {
    alignItems: "center",
  },
});
