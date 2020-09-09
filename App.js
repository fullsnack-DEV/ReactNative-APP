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
import Loginscreen from "./app/screens/Loginscreen";
import ListingEditscreen from "./app/screens/ListingEditscreen";

export default function App() {
  return <ListingEditscreen />;
}

const styles = StyleSheet.create({
  container: {},
});
