import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Humidite from "../icons/humidite";
import Ressenti from "../icons/ressenti";
import Vent from "../icons/vitesse-vent";
import Visibilite from "../icons/visibilite";
import Uv from "../icons/uv";
import Up from "../icons/up";
import Down from "../icons/down";

const DetailsCard = props => (
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
    <View style={{ justifyContent: "center" }}>
      <Text style={styles.title}>DÉTAILS</Text>
      <View style={styles.detailsRow}>
        <Ressenti height={18} width={18} />
        <Text style={styles.text}> ressenti: {props.feeltemp}°</Text>
      </View>
      <View style={styles.detailsRow}>
        <Humidite height={18} width={18} />
        <Text style={styles.text}> humidite: {props.humidity} %</Text>
      </View>
      <View style={styles.detailsRow}>
        <Vent height={18} width={18} />
        <Text style={styles.text}> vent: {props.wind} Km/h</Text>
      </View>
      <View style={styles.detailsRow}>
        <Visibilite height={18} width={18} />
        <Text style={styles.text}> visibilite: {props.visibility} Km</Text>
      </View>
      <View style={styles.detailsRow}>
        <Uv height={18} width={18} />
        <Text style={styles.text}> uv: {props.uv}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: "#BAE8E5",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    paddingBottom: 24
  },
  text: {
    color: "#BAE8E5"
  },
  temperature: {
    color: "#BAE8E5",
    fontSize: 42
  },
  global: {
    flex: 2,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  },
  detailsRow: { flexDirection: "row", paddingBottom: 16 }
});

export default DetailsCard;
