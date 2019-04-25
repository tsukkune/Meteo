import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Fleche = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 58 75.7"
    xmlSpace="preserve"
    fill="#5E9E9C"
    {...props}
  >
    <Path
      fill="none"
      stroke="#5d9e9c"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19 8.4l29.5 29.5-30 30"
    />
  </Svg>
);

export default Fleche;
