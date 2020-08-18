import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Viewimagescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deletIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deletIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

//Refactoring the code is very important, we gonna create a seprate color file to place all oyr color in it so that it will be easy for us to import them and reuse them
