import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Humidite = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    fill="#fff"
    {...props}
  >
    <Path d="M121.1 12.6c-2-2.9-5.3-4.7-8.9-4.7h-.1c-3.6 0-6.9 1.8-8.9 4.8C97.1 22 43.1 104.3 43.1 137c0 6.8.8 13.6 2.4 20.2 6.6 27.4 27 50.5 60 50.5 37.7 0 66.5-20.5 74.1-50.5 1.3-5.1 2-10.5 2-16.1.2-37.9-54.3-119.4-60.5-128.5zm47.6 144.5c-7.8 25.6-34.1 39.8-63 39.8-26.7 0-43-17.8-49-39.8-1.8-6.5-2.7-13.3-2.7-20.2 0-30.3 58.3-118.3 58.3-118.3s58.9 86.8 58.9 122.5c-.1 5.8-1 11.1-2.5 16z" />
  </Svg>
);

export default Humidite;
