import * as React from 'react';
import Svg, { Rect, Text, TSpan, Path } from 'react-native-svg';

export const SvgComponent = props => {
  return (
    <Svg width={341} height={249} viewBox="0 0 341 249" fill="none" {...props}>
      <Rect width={341} height={249} rx={32} fill="#8DFD84" />
      <Text
        fill="#fff"
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={24}
        fontWeight="bold"
        letterSpacing="0em">
        <TSpan x={259} y={231.203}>
          CODE
        </TSpan>
      </Text>
      <Path
        d="M230.405 48a7.629 7.629 0 017.629 7.63v120.146a7.629 7.629 0 11-15.258 0V55.629A7.63 7.63 0 01230.405 48z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M246 167.811c0 8.612-6.982 15.594-15.595 15.594s-15.595-6.982-15.595-15.594c0-8.613 6.982-15.595 15.595-15.595S246 159.198 246 167.811zM101.629 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01101.629 48zM133.491 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01133.491 48zM166.017 48a7.63 7.63 0 017.63 7.63v120.146a7.63 7.63 0 01-15.259 0V55.629A7.63 7.63 0 01166.017 48zM204.845 55.297a7.297 7.297 0 11-14.595 0 7.297 7.297 0 0114.595 0z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  );
};
