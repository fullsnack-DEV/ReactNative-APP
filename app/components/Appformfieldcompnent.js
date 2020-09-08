import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppTextinput from "../components/AppTextinput";
import Errormessage from "../components/Errormessage";
import { useFormikContext } from "formik";
export default function Appformfieldcompnent({ name, ...otherprops }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextinput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherprops}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
