import React from "react";
import { View, Text } from "react-native";
import Appbutton from "./Appbutton";
import { useFormikContext } from "formik";

export default function Submitbtn({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Appbutton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
