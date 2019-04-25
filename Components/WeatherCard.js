import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Close from "../icons/close";
import Pluie_soleil from "../icons/pluie-soleil";
import Nuage from "../icons/nuage";

const WeatherCard = props => (
  <View style={{ backgroundColor: "#fff", flex: 1 }}>
    <View style={styles.global}>
      <Text>{props.date}</Text>
      <Text>{props.city}</Text>
      {selectIcon(props.code)}
      <Text>{props.condition}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  global: {
    width: "90%",
    alignItems: "center"
  }
});

function selectIcon(code) {
  switch (code) {
    case 1189:
      return <Pluie_soleil height={100} width={100} />;
      break;
    case 1006:
      return <Nuage height={100} width={100} />;
    default:
      return <Close height={100} width={100} />;
  }
}

export default WeatherCard;
