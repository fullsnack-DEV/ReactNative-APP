import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../config/color";
import defaultstyles from "../config/styles";

export default function AppTextinput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Color.primary}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultstyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginVertical: 5,
  },
  textinput: {},
});
