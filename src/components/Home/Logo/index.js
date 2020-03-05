import React from "react";
import Svg, {
  G,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { View, StyleSheet } from "react-native";
import { StyleSvg } from "./style";

export const Logo = props => {
  return (
    <StyleSvg>
      <Svg width={205} height={166} viewBox="0 0 205 166" {...props}>
        <Defs>
          <LinearGradient
            id="prefix__a"
            x1={0.5}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#13dfff" />
            <Stop offset={1} stopColor="#84f37b" />
          </LinearGradient>
        </Defs>
        <G transform="translate(-78 -125)" fill="url(#prefix__a)">
          <Rect
            data-name="Rectangle 1"
            width={26}
            height={166}
            rx={13}
            transform="translate(245 125)"
          />
          <Circle
            data-name="Ellipse 3"
            cx={25}
            cy={25}
            r={25}
            transform="translate(233 241)"
          />
          <Rect
            data-name="Rectangle 1"
            width={26}
            height={166}
            rx={13}
            transform="translate(78 125)"
          />
          <Rect
            data-name="Rectangle 1"
            width={26}
            height={166}
            rx={13}
            transform="translate(120 125)"
          />
          <Rect
            data-name="Rectangle 1"
            width={26}
            height={166}
            rx={13}
            transform="translate(162 125)"
          />
          <Circle
            data-name="Ellipse 2"
            cx={12.5}
            cy={12.5}
            r={12.5}
            transform="translate(204 125)"
          />
        </G>
      </Svg>
    </StyleSvg>
  );
};
