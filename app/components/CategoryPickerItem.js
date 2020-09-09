import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Iconcomp from "./Iconcomp";
import AppText from "./AppText";

export default function CategoryPickerItem({ label, item, onPress }) {
  return (
    <View style={styles.Container}>
      <Iconcomp
        backgroundcolor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}> {item.label} </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});
