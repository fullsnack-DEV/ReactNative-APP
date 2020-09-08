import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";

export default function Appform({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
