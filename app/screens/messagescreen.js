import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Listitemcom from "../components/Listitemcom";
import Screen from "../components/screen";
import Listseprator from "../components/Listseprator";
import Listdeleteaction from "../components/Listdeleteaction";

const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/user2.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "D1",
    image: require("../../assets/user2.jpg"),
  },
  {
    id: 3,
    title: "T1",
    description: "D1",
    image: require("../../assets/user2.jpg"),
  },
  {
    id: 4,
    title: "T1",
    description: "D1",
    image: require("../../assets/user2.jpg"),
  },
  {
    id: 5,
    title: "T5",
    description: "D5",
    image: require("../../assets/user2.jpg"),
  },
];

export default function Messagescreen() {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshing] = useState(false); //hooks function

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.screen}>
      <View>
        <FlatList
          data={messages}
          keyextractor={(messages) => messages.id.toString()}
          renderItem={({ item }) => (
            <Listitemcom
              title={item.title}
              subtitle={item.description}
              image={item.image}
              renderRightActions={() => (
                <Listdeleteaction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={Listseprator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 5,
                title: "T5",
                description: "D5",
                image: require("../../assets/user2.jpg"),
              },
            ]);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

//Flatlist will take a 3 props in. 1> Data , 2> keyextractor , 3> renderitem
//always try to build a resuable component like reusaable icon component , reusable text component etc
// hooks function will add some extra functionlity to the existing component
