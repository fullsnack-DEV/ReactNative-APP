import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
//Cutsom component
import Appbutton from "../components/Appbutton";

export default function Welcomescreen() {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />

        <Text style={styles.heading}>Sell What We Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Appbutton title="Login" />

        <Appbutton title="Sign-up" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,

    width: "100%",
    marginVertical: 40,
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  heading: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: "900",
    color: "#fff",
  },
});
