import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const close = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M107.9 107.7l54-54c1.6-1.6 1.6-4.1 0-5.7-1.6-1.6-4.1-1.6-5.7 0l-54 54-54-54c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l54 54-54 54c-1.6 1.6-1.6 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2l54-54 54 54c.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2c1.6-1.6 1.6-4.1 0-5.7l-53.8-54z" />
  </Svg>
)

export default close
