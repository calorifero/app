import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
  Ellipse,
  Circle,
  Text,
  TSpan
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const Svgs = props => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 398 398" {...props}>
      <Defs>
        <LinearGradient id="prefix__b" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#13dfff" />
          <Stop offset={1} stopColor="#84f37b" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 2" transform="translate(-6.616 -62.616)">
        <Path
          data-name="Path 7"
          d="M205.616 62.616c109.9 0 199 89.1 199 199s-89.1 199-199 199-199-89.1-199-199 89.1-199 199-199z"
          fill="rgba(56,165,66,0.63)"
        />
        <Rect
          data-name="Rectangle 11"
          width={343}
          height={121}
          rx={20}
          transform="translate(29.616 200.616)"
          fill="#fff"
        />
        <G transform="translate(6.62 62.62)" filter="url(#prefix__a)">
          <Rect
            data-name="Rectangle 12"
            width={37}
            height={37}
            rx={7}
            transform="translate(32 148)"
            fill="#fff"
          />
        </G>
        <G transform="translate(42.255 215.882)" fill="url(#prefix__b)">
          <Rect
            data-name="Rectangle 1"
            width={3}
            height={27}
            rx={1.5}
            transform="translate(25.362 -.266)"
          />
          <Ellipse
            data-name="Ellipse 3"
            cx={3.5}
            cy={3}
            rx={3.5}
            ry={3}
            transform="translate(23.362 20.734)"
          />
          <Rect
            data-name="Rectangle 1"
            width={3}
            height={27}
            rx={1.5}
            transform="translate(.362 -.266)"
          />
          <Rect
            data-name="Rectangle 1"
            width={3}
            height={27}
            rx={1.5}
            transform="translate(6.362 -.266)"
          />
          <Rect
            data-name="Rectangle 1"
            width={3}
            height={27}
            rx={1.5}
            transform="translate(13.362 -.266)"
          />
          <Circle data-name="Ellipse 2" cx={2} cy={2} r={2} transform="translate(18.362 -.266)" />
        </G>
        <Text
          data-name="Stai andando bene\uD83E\uDD17"
          transform="translate(38.616 273.616)"
          fill="rgba(0,0,0,0.76)"
          fontSize={24}
          fontWeight={700}>
          <TSpan x={0} y={0}>
            Stai andando bene
          </TSpan>
          <TSpan y={0} fontWeight={400}>
            {'\uD83E\uDD17'}
          </TSpan>
        </Text>
        <Text
          transform="translate(85.616 237.616)"
          fill="rgba(0,0,0,0.5)"
          fontSize={19}
          fontWeight={700}>
          <TSpan x={0} y={0}>
            Natura
          </TSpan>
        </Text>
        <Text
          data-name="Continua cos\xEC"
          transform="translate(38.616 303.616)"
          fill="rgba(0,0,0,0.76)"
          fontSize={22}>
          <TSpan x={0} y={0}>
            {'Continua cos\xEC'}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};
