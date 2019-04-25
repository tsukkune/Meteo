import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
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
import Vent_soleil from "../icons/venet-soleil";
import Vent from "../icons/vent";



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
      return <Pluie height={100} width={100} />;
      case 1066:
      return <Neige height={100} width={100} />;
      case 1069:
      return <Neige height={100} width={100} />;
      case 1114:
      return <Neige height={100} width={100} />;
      case 1117:
      return <Brouillard height={100} width={100} />;
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
      return <Pluie_soleil height={100} width={100} />;      break;

    case 1189:
      return <Pluie_soleil height={100} width={100} />;
    case 1006:
      return <Nuage height={100} width={100} />;
    default:
      return <Close height={100} width={100} 
      fill="#5E9E9C"/>;
  }
}

export default WeatherCard;
