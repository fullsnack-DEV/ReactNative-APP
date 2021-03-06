import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Apptext from "../components/AppText";
import colors from "../config/color";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Listitemcom({
  title,
  subtitle,
  image,
  IconComponent,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.lightgrey}
        onPress={() => console.log}
      >
        <View style={styles.container}>
          {IconComponent}

          {image && <Image style={styles.image} source={image} />}

          <View style={styles.usercontainer}>
            <Apptext style={styles.title} numberOfLine={1}>
              {title}
            </Apptext>

            {subtitle && (
              <Apptext style={styles.subtitle} numberOfLine={2}>
                {subtitle}
              </Apptext>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  usercontainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  subtitle: {
    color: colors.grey,
  },
  container: {
    flexDirection: "row",

    padding: 15,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: "600",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
});

// this is the reusable item component we gonna reuse it in a multiple places
