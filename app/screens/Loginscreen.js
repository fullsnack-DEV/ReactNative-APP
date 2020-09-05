import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "../components/screen";
import AppTextinput from "../components/AppTextinput";
import Appbutton from "../components/Appbutton";
import { Formik } from "formik";

export default function Loginscreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Formik
        intialValues={{ email: "", password: "" }}
        onsubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextinput
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="email"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppTextinput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              placeholder="password"
              textContentType="password"
              secureTextEntry
            />
            <Appbutton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 90,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});

//we are using formik to build a form . We don't need state variables if we are using formik
