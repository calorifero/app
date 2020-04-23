import React, { useEffect, useState } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import * as Haptics from 'expo-haptics';
import {
  Container,
  Header,
  DesignContainer,
  FlexWrap,
  TextBox,
  MiniLogo,
  BigSvg,
  SmallSvg,
  Mini,
  LatestUpdate
} from './style';
import { Logo } from './Logo/index';
import { Bank } from './Bank/Mini/index';
import { Temperature } from './Temperature/Mini/index';
import { TopContainer } from './TopContainer/index';
import {
  SHOW_TEMPERATURE,
  SHOW_LOGO,
  SHOW_BANK,
  ANIMATE_TEMPERATURE,
  ANIMATE_LOGO,
  ANIMATE_BANK,
  GOOD,
  BAD
} from './action';
import { Text } from './Text/index';

const AnimatedMini = Animatable.createAnimatableComponent(Mini);

export const Home = () => {
  const top = useSelector(state => state.top);
  const animation = useSelector(state => state.animation);
  const color = useSelector(state => state.temperatureStatus);
  
  const [bankAnimation, setBankAnimation ] = useState(false)
  const [temperatureAnimation, setTemperatureAnimation ] = useState(false)
  const [logoAnimation, setLogoAnimation ] = useState(false)

  const dispatch = useDispatch();

  return (
    <Container>
      <LatestUpdate>Ultimo aggiornamento: ieri</LatestUpdate>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? (
          <AnimatedMini
            color={color.color}
            animation={temperatureAnimation ? 'zoomOut' : "zoomIn"}
            onAnimationEnd={() => {
              if (temperatureAnimation === true) {
                setTemperatureAnimation(false)
                dispatch(SHOW_TEMPERATURE());
              }
            }}
            duration={temperatureAnimation ? 450 : 300}
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => {
              setTemperatureAnimation(true)
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <Temperature />
          </AnimatedMini>
        ) : null}
        {top.logo ? (
          <AnimatedMini
            color={color.color}
            animation={logoAnimation ? 'zoomOut' : "zoomIn"}
            onPressIn={() => {

                setLogoAnimation(true)
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
            onAnimationEnd={() => {
              if (logoAnimation === true) {
                setLogoAnimation(false)
                dispatch(SHOW_LOGO());
              }
            }}
            duration={temperatureAnimation ? 450 : 300}
            useNativeDriver
            activeOpacity={0.6}>
            <Logo />
          </AnimatedMini>
        ) : null}
        {top.bank ? (
          <AnimatedMini
            duration={temperatureAnimation ? 450 : 300}
            color="rgba(255,236,39, 0.7)"
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => {
              setBankAnimation(true)
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
            animation={bankAnimation ? 'zoomOut' : "zoomIn"}
            onAnimationEnd={() => {
              if (bankAnimation === true) {
                setBankAnimation(false)
                dispatch(SHOW_BANK());
              }
            }}>
            <Bank />
          </AnimatedMini>
        ) : null}
      </FlexWrap>
      <Text />
    </Container>
  );
};
