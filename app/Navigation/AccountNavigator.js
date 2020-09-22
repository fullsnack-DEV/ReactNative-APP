import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Accountscreen from "../screens/Accountscreen";
import Messagescreen from "../screens/messagescreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Accounts" component={Accountscreen} />
    <Stack.Screen name="Messages" component={Messagescreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
