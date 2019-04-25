import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const up = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    fill="#5E9E9C"
    {...props}
  >
    <Path d="M204 187.7l-94.1-163c-.7-1.2-2-2-3.5-2s-2.8.8-3.5 2l-94.1 163c-.7 1.2-.7 2.8 0 4 .7 1.2 2 2 3.5 2h188.2c1.4 0 2.8-.8 3.5-2 .7-1.2.7-2.7 0-4z" />
  </Svg>
);

export default up;
