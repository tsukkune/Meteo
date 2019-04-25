import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Humidite from "../icons/humidite";
import Ressenti from "../icons/ressenti";
import Vent from "../icons/vent";
import Visibilite from "../icons/visibilite";
import Uv from "../icons/uv";
import Up from "../icons/up";
import Down from "../icons/down";

const DetailsCard = props => (
  <View /*style={{ backgroundColor: "#BAE8E5" }}*/>
    <View style={styles.global}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Down height={18} width={18} />
          <Text style={styles.text}> {props.min}°</Text>
          <Up height={18} width={18} />
          <Text style={styles.text}> {props.max}°</Text>
        </View>
        <Text style={styles.temperature}>{props.temp}°</Text>
      </View>
      <View>
        <Text style={styles.title}>DÉTAILS</Text>
        <View style={{ flexDirection: "row" }}>
          <Ressenti height={18} width={18} />
          <Text style={styles.text}> ressenti: {props.feeltemp}°</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Humidite height={18} width={18} />
          <Text style={styles.text}> humidite: {props.humidity} %</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Vent height={18} width={18} />
          <Text style={styles.text}> vent: {props.wind} Km/h</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Visibilite height={18} width={18} />
          <Text style={styles.text}> visibilite: {props.visibility} Km</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Uv height={18} width={18} />
          <Text style={styles.text}> uv: {props.uv}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  text: {
    color: "white"
  },
  temperature: {
    color: "white",
    fontSize: 42
  },
  global: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  }
});

export default DetailsCard;
