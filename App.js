import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcomescreen from "./app/screens/Welcomescreen";
import Viewimagescreen from "./app/screens/Viewimagescreen";
import Appbutton from "./app/components/Appbutton";
import Cardcom from "./app/components/Cardcom";
import Listingdetailsscreen from "./app/screens/Listingdetailsscreen";
import Messagescreen from "./app/screens/messagescreen";
import Screen from "./app/components/screen";
import Iconcomp from "./app/components/Iconcomp";
import Listitemcom from "./app/components/Listitemcom";
import Accountscreen from "./app/screens/Accountscreen";
import Listingscreen from "./app/screens/Listingscreen";
import AppTextinput from "./app/components/AppTextinput";
import Apppicker from "./app/components/Apppicker";

const categories = [
  { label: "furniture", value: 1 },
  { label: "Sofa", value: 2 },
  { label: "Chair", value: 3 },
];

export default function App() {
  const [Category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <Apppicker
        items={categories}
        selectedItem={Category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
      />
      <AppTextinput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
