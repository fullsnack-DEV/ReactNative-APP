import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/color";
import Listitem from "../components/Listitemcom";
export default function Listingdetailsscreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailcontainer}>
        <AppText style={styles.title}> {listing.title} </AppText>
        <AppText style={styles.price}> {listing.price} </AppText>
        <View style={styles.itemwrapper}>
          <Listitem
            image={require("../../assets/user.jpg")}
            title="Hanna Montanna"
            subtitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailcontainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  itemwrapper: {
    marginVertical: 40,
  },
});
