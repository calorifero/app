import * as React from 'react';
import Svg, { Rect, Path, G, Text, TSpan, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const SvgComponent = props => {
  return (
    <Svg width={341} height={249} viewBox="0 0 341 249" fill="none" {...props}>
      <Rect width={341} height={249} rx={32} fill="#84F37B" />
      <Path
        d="M314.933 11H26.067C15.537 11 7 19.093 7 29.075v73.205c0 9.983 8.537 18.076 19.067 18.076h288.866c10.53 0 19.067-8.093 19.067-18.076V29.075C334 19.093 325.463 11 314.933 11z"
        fill="#fff"
      />
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M44.185 20.041H22.257c-3.685 0-6.673 2.833-6.673 6.327v20.787c0 3.493 2.988 6.326 6.674 6.326h21.927c3.685 0 6.673-2.833 6.673-6.327V26.368c0-3.494-2.988-6.326-6.673-6.326z"
          fill="#fff"
        />
      </G>
      <Path
        d="M46.088 25.912c0-.749-.64-1.356-1.43-1.356-.79 0-1.43.607-1.43 1.356v21.69c0 .749.64 1.356 1.43 1.356.79 0 1.43-.607 1.43-1.356v-21.69z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M44.658 48.958c1.843 0 3.337-1.213 3.337-2.71 0-1.498-1.494-2.712-3.337-2.712-1.842 0-3.336 1.214-3.336 2.711 0 1.498 1.494 2.711 3.336 2.711z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M22.255 25.912c0-.749-.64-1.356-1.43-1.356-.79 0-1.43.607-1.43 1.356v21.69c0 .749.64 1.356 1.43 1.356.79 0 1.43-.607 1.43-1.356v-21.69z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M27.975 25.912c0-.749-.64-1.356-1.43-1.356-.79 0-1.43.607-1.43 1.356v21.69c0 .749.64 1.356 1.43 1.356.79 0 1.43-.607 1.43-1.356v-21.69z"
        fill="url(#prefix__paint3_linear)"
      />
      <Path
        d="M34.648 25.912c0-.749-.64-1.356-1.43-1.356-.79 0-1.43.607-1.43 1.356v21.69c0 .749.64 1.356 1.43 1.356.79 0 1.43-.607 1.43-1.356v-21.69z"
        fill="url(#prefix__paint4_linear)"
      />
      <Path
        d="M38.462 28.171c1.053 0 1.906-.809 1.906-1.807 0-.999-.853-1.808-1.906-1.808-1.054 0-1.907.81-1.907 1.808s.853 1.807 1.907 1.807z"
        fill="url(#prefix__paint5_linear)"
      />
      <Text
        fill="#000"
        fillOpacity={0.76}
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={20}
        fontWeight="bold"
        letterSpacing="0em">
        <TSpan x={15.58} y={73.621}>
          {'Stai andando bene\uD83E\uDD17'}
        </TSpan>
      </Text>
      <Text
        fill="#000"
        fillOpacity={0.5}
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={18}
        fontWeight="bold"
        letterSpacing="0em">
        <TSpan x={60.388} y={43.92}>
          Natura
        </TSpan>
      </Text>
      <Text
        fill="#000"
        fillOpacity={0.76}
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={20}
        letterSpacing="0em">
        <TSpan x={15.58} y={102.541}>
          {'Continua cos\xEC'}
        </TSpan>
      </Text>
      <Text
        transform="translate(306 31)"
        fill="#000"
        fillOpacity={0.7}
        style={{
          whiteSpace: 'pre'
        }}
        fontSize={14}
        letterSpacing="0em">
        <TSpan x={0} y={12.785}>
          ora
        </TSpan>
      </Text>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={44.658}
          y1={24.556}
          x2={44.658}
          y2={48.958}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={44.658}
          y1={43.536}
          x2={44.658}
          y2={48.958}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={20.825}
          y1={24.556}
          x2={20.825}
          y2={48.958}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={26.545}
          y1={24.556}
          x2={26.545}
          y2={48.958}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={33.218}
          y1={24.556}
          x2={33.218}
          y2={48.958}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={38.462}
          y1={24.556}
          x2={38.462}
          y2={28.171}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70FF00" />
          <Stop offset={0.766} stopColor="#27DDBC" />
          <Stop offset={1} stopColor="#84F37B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
