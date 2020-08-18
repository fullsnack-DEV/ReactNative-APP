import { StatusBar } from "expo-status-bar";
import React from "react";
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
export default function App() {
  return (
    <Screen>
      <Listitemcom
        title="My title"
        // subtitle="My sbtitle "
        ImageComponent={<Iconcomp name="email" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
