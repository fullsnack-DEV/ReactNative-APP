import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/screen";
import Cardcom from "../components/Cardcom";
import Colors from "../config/color";

const listings = [
  {
    id: 1,
    title: "bed for sale",
    price: 1000,
    image: require("../../assets/bed.jpg.jpg"),
  },
  {
    id: 2,
    title: "Table for sale",
    price: 1000,
    image: require("../../assets/Diningtable.jpg.jpg"),
  },
  {
    id: 3,
    title: "Table for sale",
    price: 1000,
    image: require("../../assets/Diningtable.jpg.jpg"),
  },
  {
    id: 4,
    title: "Table for sale",
    price: 1000,
    image: require("../../assets/Diningtable.jpg.jpg"),
  },
];

export default function Listingscreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Cardcom
            title={item.title}
            subtitle={"INR" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: Colors.lightgrey,
  },
});
