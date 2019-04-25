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
        <Text style={styles.minMax}> {props.min}°</Text>
        <Up height={18} width={18} />
        <Text style={styles.minMax}> {props.max}°</Text>
      </View>
      <Text style={styles.temperature}>{props.temp}°</Text>
    </View>
    <View style={{ justifyContent: "center" }}>
      <Text style={styles.title}>DÉTAILS</Text>
      <View style={styles.detailsRow}>
        <Ressenti height={18} width={18} />
        <Text style={styles.text}> Ressenti : {props.feeltemp}°</Text>
      </View>
      <View style={styles.detailsRow}>
        <Humidite height={18} width={18} />
        <Text style={styles.text}> Humidite : {props.humidity} %</Text>
      </View>
      <View style={styles.detailsRow}>
        <Vent height={18} width={18} />
        <Text style={styles.text}> Vent : {props.wind} Km/h</Text>
      </View>
      <View style={styles.detailsRow}>
        <Visibilite height={18} width={18} />
        <Text style={styles.text}> Visibilite : {props.visibility} Km</Text>
      </View>
      <View style={styles.detailsRow}>
        <Uv height={18} width={18} />
        <Text style={styles.text}> Indice UV : {props.uv}</Text>
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
  minMax: {
    color: "#5E9E9C"
  },
  global: {
    flex: 3,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly"
  },
  detailsRow: { flexDirection: "row", paddingBottom: 16 }
});

export default DetailsCard;
