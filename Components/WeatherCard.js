import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import Close from "../icons/close";
import Brouillard from "../icons/brouillard";
import Grele from "../icons/grele";
import Neige_soleil from "../icons/neige-soleil";
import Neige from "../icons/neige";
import Nuage_orage from "../icons/nuage-orage";
import Nuage_soleil from "../icons/nuage-soleil";
import Nuage_vent from "../icons/nuage-vent";
import Nuage from "../icons/nuage";
import Orage from "../icons/orage";
import Pluie_orage from "../icons/pluie-orage";
import Pluie_soleil from "../icons/pluie-soleil";
import Pluie from "../icons/pluie";
import Soleil from "../icons/soleil";
import Vent_orage from "../icons/vent-orage";
import Vent_soleil from "../icons/vent-soleil";
import Vent from "../icons/vent";

const WeatherCard = props => (
  <View
    style={{
      justifyContent: "space-around",
      flex: 2
    }}
  >
    <View style={styles.global}>
      <Text>{props.date}</Text>
      <Text>{props.city}</Text>
      {selectIcon(props.code)}
      <Text>{props.condition}</Text>
    </View>
    <Image
      style={{
        flex: 1,
        height: undefined,
        width: undefined,
        backgroundColor: "transparent"
      }}
      source={require("../img/vague-09.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  global: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

function selectIcon(code) {
  switch (code) {
    case 1000:
      return <Soleil height={100} width={100} />;
    case 1003:
      return <Nuage_soleil height={100} width={100} />;
    case 1006:
      return <Nuage height={100} width={100} />;
    case 1009:
      return <Nuage_soleil height={100} width={100} />;
    case 1030:
      return <Brouillard height={100} width={100} />;
    case 1063:
      return <Pluie_soleil height={100} width={100} />;
    case 1066:
      return <Neige_soleil height={100} width={100} />;
    case 1069:
      return <Neige_soleil height={100} width={100} />;
    case 1072:
      return <Pluie height={100} width={100} />;
    case 1087:
      return <Orage height={100} width={100} />;
    case 1114:
      return <Neige height={100} width={100} />;
    case 1117:
      return <Vent height={100} width={100} />;
    case 1135:
      return <Brouillard height={100} width={100} />;
    case 1147:
      return <Brouillard height={100} width={100} />;
    case 1150:
      return <Nuage_soleil height={100} width={100} />;
    case 1153:
      return <Nuage_soleil height={100} width={100} />;
    case 1168:
      return <Brouillard height={100} width={100} />;
    case 1171:
      return <Brouillard height={100} width={100} />;
    case 1147:
      return <Brouillard height={100} width={100} />;
    case 1150:
      return <Pluie_soleil height={100} width={100} />;
    case 1153:
      return <Pluie_soleil height={100} width={100} />;
    case 1168:
      return <Pluie_soleil height={100} width={100} />;
    case 1171:
      return <Pluie height={100} width={100} />;
    case 1180:
      return <Pluie_soleil height={100} width={100} />;
    case 1183:
      return <Pluie_soleil height={100} width={100} />;
    case 1186:
      return <Pluie_soleil height={100} width={100} />;
    case 1189:
      return <Pluie height={100} width={100} />;
    case 1192:
      return <Pluie_soleil height={100} width={100} />;
    case 1195:
      return <Pluie height={100} width={100} />;
    case 1198:
      return <Pluie height={100} width={100} />;
    case 1201:
      return <Pluie height={100} width={100} />;
    case 1204:
      return <Neige height={100} width={100} />;
    case 1207:
      return <Neige height={100} width={100} />;
    case 1210:
      return <Neige_soleil height={100} width={100} />;
    case 1213:
      return <Neige height={100} width={100} />;
    case 1216:
      return <Neige_soleil height={100} width={100} />;
    case 1219:
      return <Neige height={100} width={100} />;
    case 1222:
      return <Neige_soleil height={100} width={100} />;
    case 1225:
      return <Neige height={100} width={100} />;
    case 1237:
      return <Grele height={100} width={100} />;
    case 1240:
      return <Pluie_soleil height={100} width={100} />;
    case 1243:
      return <Pluie height={100} width={100} />;
    case 1246:
      return <Pluie height={100} width={100} />;
    case 1249:
      return <Neige_soleil height={100} width={100} />;
    case 1252:
      return <Neige height={100} width={100} />;
    case 1255:
      return <Neige_soleil height={100} width={100} />;
    case 1069:
      return <Neige_soleil height={100} width={100} />;
    case 1258:
      return <Neige height={100} width={100} />;
    case 1261:
      return <Grele height={100} width={100} />;
    case 1264:
      return <Grele height={100} width={100} />;
    case 1273:
      return <Vent_orage height={100} width={100} />;
    case 1276:
      return <Pluie_orage height={100} width={100} />;
    case 1279:
      return <Orage height={100} width={100} />;
    case 1282:
      return <Orage height={100} width={100} />;

    default:
      return <Close height={100} width={100} fill="#5E9E9C" />;
  }
}

export default WeatherCard;
