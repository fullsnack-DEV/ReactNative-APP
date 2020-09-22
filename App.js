import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Button } from "react-native";
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
import * as ImagePicker from "expo-image-picker";
import Imageinput from "./app/components/Imageinput";
import Imageinputlist from "./app/components/Imageinputlist";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import NavigationThemes from "./app/Navigation/NavigationThemes";
import AppNavigator from "./app/Navigation/Appnavigator";

const Stack = createStackNavigator();
const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen />
  </Stack.Navigator>;
};

export default function App() {
  return (
    <NavigationContainer theme={NavigationThemes}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
