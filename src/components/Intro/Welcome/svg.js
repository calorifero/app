import * as React from 'react';
import Svg, { Rect, Text, TSpan, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const SvgComponent = props => {
  return (
    <Svg width={341} height={249} viewBox="0 0 341 249" fill="none" {...props}>
      <Rect width={341} height={249} rx={32} fill="#84F37B" />
      <Text
        fill="#128E08"
        stroke="#fff"
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={24}
        fontWeight="bold"
        letterSpacing="0em">
        <TSpan x={222} y={237.203}>
          SXD-CDA
        </TSpan>
      </Text>
      <Path
        d="M230.405 48a7.629 7.629 0 017.629 7.63v120.146a7.629 7.629 0 11-15.258 0V55.629A7.63 7.63 0 01230.405 48z"
        fill="url(#prefix__paint0_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M246 167.811c0 8.612-6.982 15.594-15.595 15.594s-15.595-6.982-15.595-15.594c0-8.613 6.982-15.595 15.595-15.595S246 159.198 246 167.811z"
        fill="url(#prefix__paint1_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M101.629 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01101.629 48z"
        fill="url(#prefix__paint2_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M133.491 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01133.491 48z"
        fill="url(#prefix__paint3_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M166.017 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01166.017 48z"
        fill="url(#prefix__paint4_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M204.845 55.297a7.297 7.297 0 11-14.595 0 7.297 7.297 0 0114.595 0z"
        fill="url(#prefix__paint5_linear)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={230.405}
          y1={47}
          x2={230.405}
          y2={184.405}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={230.405}
          y1={151.216}
          x2={230.405}
          y2={184.405}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={101.629}
          y1={47}
          x2={101.629}
          y2={184.405}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={133.491}
          y1={47}
          x2={133.491}
          y2={184.405}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={166.017}
          y1={47}
          x2={166.017}
          y2={184.405}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={197.547}
          y1={47}
          x2={197.547}
          y2={63.595}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#84F37B" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
