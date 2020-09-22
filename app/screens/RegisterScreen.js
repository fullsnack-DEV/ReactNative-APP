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
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Loginscreen() {
  return (
    <Screen style={styles.container}>
      <Appform
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Appformfieldcompnent
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />

        <Appformfieldcompnent
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <Appformfieldcompnent
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <Submitbtn title="Register" />
      </Appform>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
