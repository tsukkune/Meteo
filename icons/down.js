import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const down = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    fill="#5E9E9C"
    {...props}
  >
    <Path d="M204 30.1c-.7-1.2-2-2-3.5-2H12.3c-1.4 0-2.8.8-3.5 2-.7 1.2-.7 2.8 0 4l94.1 163c.7 1.2 2 2 3.5 2s2.8-.8 3.5-2l94.1-163c.7-1.3.7-2.8 0-4z" />
  </Svg>
);

export default down;
