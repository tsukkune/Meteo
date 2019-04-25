import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const risque_pluie = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      d="M103.7 198.5c28.9 0 55.2-14.2 63-39.8h-112c6 22 22.3 39.8 49 39.8z"
      fill="#28316f"
    />
    <Path d="M119.1 14.1c-2-2.9-5.3-4.7-8.9-4.7h-.1c-3.6 0-6.9 1.8-8.9 4.8-6.1 9.3-60.1 91.6-60.1 124.3 0 6.8.8 13.6 2.4 20.2 6.6 27.4 27 50.5 60 50.5 37.7 0 66.5-20.5 74.1-50.5 1.3-5.1 2-10.5 2-16.1.2-37.9-54.3-119.4-60.5-128.5zm-15.4 184.4c-26.7 0-43-17.8-49-39.8-1.8-6.5-2.7-13.3-2.7-20.2 0-30.3 58.3-118.3 58.3-118.3s58.9 86.8 58.9 122.5c0 5.8-.9 11.1-2.4 16.1-7.9 25.4-34.2 39.7-63.1 39.7z" />
  </Svg>
)

export default risque_pluie
