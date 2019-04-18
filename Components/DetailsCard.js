import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DetailsCard = props => (
  <View style={{ backgroundColor: "#BAE8E5" }}>
    <Text style={styles.title}>DÉTAILS</Text>
    <View style={styles.global}>
      <Text style={styles.temperature}>{props.temp}°</Text>
      <View>
        <Text>ressenti: {props.feeltemp}°</Text>
        <Text>humidite: {props.humidity} %</Text>
        <Text>vent: {props.wind} Km/h</Text>
        <Text>visibilite: {props.visibility} Km</Text>
        <Text>uv: {props.uv}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    justifyContent: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  temperature: {
    fontSize: 42
  },
  global: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  }
});

export default DetailsCard;
