import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/screen";
import Listitemcom from "../components/Listitemcom";
import Colors from "../config/color";
import Iconcomp from "../components/Iconcomp";
import Listseprator from "../components/Listseprator";

//our dummy data for flatlist

const menuitems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
  },
];

export default function Accountscreen() {
  return (
    <Screen style={styles.backscreen}>
      <View style={styles.container}>
        <Listitemcom
          title="Sara Taylor"
          subtitle="programming@gmail.com"
          image={require("../../assets/user.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuitems}
          keyExtractor={(menuitem) => menuitem.title}
          ItemSeparatorComponent={Listseprator}
          renderItem={({ item }) => (
            <Listitemcom
              title={item.title}
              IconComponent={
                <Iconcomp
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <Listitemcom
        title="log out"
        IconComponent={<Iconcomp name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  backscreen: {
    backgroundColor: Colors.lightgrey,
  },
  container: {
    marginVertical: 20,
  },
});
