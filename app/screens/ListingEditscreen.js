import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Appform from "../components/Appform";
import Appformfield from "../components/Appformfieldcompnent";
import Appformpicker from "../components/Appformpicker";
import Screen from "../components/screen";
import Submitbtn from "../components/Submitbtn";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("title"),
  price: Yup.number().required().min(1).max(1000).label("price"),
  description: Yup.string().label("description"),
  category: Yup.object().required().nullable().label("category"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

export default function ListingEditscreen() {
  return (
    <Screen style={styles.container}>
      <Appform
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Appformfield maxLength={255} name="title" placeholder="title" />

        <Appformfield
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="price"
          width={120}
        />

        <Appformpicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <Appformfield
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="description"
        />

        <Submitbtn title="post" />
      </Appform>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
});
