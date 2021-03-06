import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Accountscreen from "../screens/Accountscreen";
import ListingEditscreen from "../screens/ListingEditscreen";
import Listingscreen from "../screens/Listingscreen";
import FeedNavigator from "./Feednavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingbtn from "./NewListingbtn";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="ListingEdit"
      component={ListingEditscreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingbtn onPress={() => navigation.navigate("ListingEdit")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />

    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
