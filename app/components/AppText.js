import React from "react";
import { Text } from "react-native";
import defaultstyle from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultstyle.text, style]}>{children}</Text>;
}

//first one is children props and the second is the style prop. To apply he extra style to an compnent we have to pass the array in the style.// we have to pass it as a array

export default AppText;
