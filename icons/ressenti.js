import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const ressenti = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    fill="#BAE8E5"
    {...props}
  >
    <Path d="M128.6 131.1v-98C128.6 15.2 114.1.7 96.2.7S63.8 15.2 63.8 33.1v98c-9.3 8.9-14.7 21.2-14.7 33.9 0 25.9 21.1 47.1 47.1 47.1s47.1-21.1 47.1-47.1c0-12.7-5.3-25-14.7-33.9zm-32.4 73c-21.5 0-39.1-17.5-39.1-39.1 0-11 4.9-21.7 13.3-29.1.9-.8 1.3-1.8 1.3-3V33.1c0-13.5 10.9-24.4 24.4-24.4s24.4 10.9 24.4 24.4v99.8c0 1.1.5 2.2 1.3 3 8.5 7.5 13.3 18.1 13.3 29.1.2 21.6-17.3 39.1-38.9 39.1z" />
    <Path d="M114.5 136V33.3c0-10.1-8.2-18.3-18.3-18.3-10.1 0-18.3 8.2-18.3 18.3V136c-9.7 6.1-16.2 16.9-16.2 29.2 0 19 15.4 34.5 34.5 34.5s34.5-15.4 34.5-34.5c0-12.3-6.5-23.1-16.2-29.2z" />
  </Svg>
);

export default ressenti;
