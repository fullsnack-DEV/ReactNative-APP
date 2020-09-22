import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
//import
import colors from "../config/color";
import Apptext from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Cardcom({ image, title, subtitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />

        <View style={styles.detailContainer}>
          <Apptext style={styles.title}>{title}</Apptext>

          <Apptext style={styles.subtitle}>{subtitle}</Apptext>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 5,
  },
});
export default Cardcom;
