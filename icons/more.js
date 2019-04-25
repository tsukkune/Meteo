import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const more = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M187.1 103.7h-76.3V27.4c0-2.2-1.8-4-4-4s-4 1.8-4 4v76.3H26.4c-2.2 0-4 1.8-4 4s1.8 4 4 4h76.3V188c0 2.2 1.8 4 4 4s4-1.8 4-4v-76.3H187c2.2 0 4-1.8 4-4s-1.7-4-3.9-4z" />
  </Svg>
)

export default more
