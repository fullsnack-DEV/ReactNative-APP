import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";

export default function Errormessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <AppText style={styles.Error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Error: {
    color: "red",
  },
});
