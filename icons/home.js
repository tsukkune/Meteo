import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const home = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 212.5 212.7"
    xmlSpace="preserve"
    fill="#5E9E9C"
    {...props}
  >
    <Path d="M197.1 108.3l-94.3-94.7c-.8-.8-1.9-1.2-2.9-1.2-1.1 0-2.1.5-2.9 1.3L7.5 110.5c-1.1 1.2-1.4 2.9-.7 4.3.6 1.5 2.1 2.4 3.7 2.4H25v84.5c0 2.2 1.8 4 4 4h146.2c2.2 0 4-1.8 4-4v-86.5h15.1c1.6 0 3.1-1 3.7-2.5.6-1.5.2-3.2-.9-4.4zm-22-1.2c-2.2 0-4 1.8-4 4v86.5H32.9v-84.5c0-2.2-1.8-4-4-4h-9.4L100 22.2l84.5 84.9h-9.4z" />
  </Svg>
)

export default home
