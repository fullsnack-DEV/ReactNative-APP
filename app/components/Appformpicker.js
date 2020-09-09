import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import Appicker from "./Apppicker";
import Errormessage from "./Errormessage";

export default function Appformpicker({
  items,
  name,

  PickerItemComponent,
  numberOfColumns,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <Appicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />

      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
