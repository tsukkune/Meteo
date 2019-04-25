import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const favoris = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill="#010202"
      d="M107.3 39.3l62.7-33-11.9 69.8 50.7 49.5-70.1 10.1-31.4 63.6L76 135.7 5.9 125.6l50.7-49.5-12-69.8z"
    />
  </Svg>
)

export default favoris
