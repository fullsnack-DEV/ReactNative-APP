import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomescreen from "../screens/Welcomescreen";
import Loginscreen from "../screens/Loginscreen";
import Accountscreen from "../screens/Accountscreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcomescreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Loginscreen} />
    <Stack.Screen name="Sign-up" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
