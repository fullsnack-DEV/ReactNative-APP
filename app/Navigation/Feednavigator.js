import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listingscreen from "../screens/Listingscreen";
import ListingEditscreen from "../screens/ListingEditscreen";
import Listingdetailsscreen from "../screens/Listingdetailsscreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListingScreen" component={Listingscreen} />

    <Stack.Screen name="Listingdetais" component={Listingdetailsscreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
