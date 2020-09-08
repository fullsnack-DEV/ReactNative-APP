import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "../components/screen";
import AppTextinput from "../components/AppTextinput";
import Appbutton from "../components/Appbutton";
import { Formik } from "formik";
//import  everything from yup
import * as Yup from "yup";
import AppText from "../components/AppText";
import Errormessage from "../components/Errormessage";
import Appformfieldcompnent from "../components/Appformfieldcompnent";
import Submitbtn from "../components/Submitbtn";
import Appform from "../components/Appform";

//vlidationschema

//for email it should be a string Yup.string()
//it should be required Yup.required()
//it should be satisfying email Yup.email()
// for label Yup.label("Email")

//same for password as well

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Loginscreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Appform
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Appformfieldcompnent
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <Appformfieldcompnent
          icon="lock"
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          placeholder="password"
          textContentType="password"
          secureTextEntry
        />

        <Submitbtn title="login" />
      </Appform>
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
