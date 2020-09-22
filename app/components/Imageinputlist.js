import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Imageinput from "./Imageinput";

export default function Imageinputlist({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollview = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollview}
        horizontal
        onContentSizeChange={() => scrollview.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <Imageinput
                imageUri={uri}
                key={uri}
                onChangeImage={(uri) => onRemoveImage(uri)}
              />
            </View>
          ))}

          <Imageinput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
