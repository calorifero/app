import React, { useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import * as Haptics from 'expo-haptics';
import {
  Container,
  Header,
  Description,
  DesignContainer,
  FlexWrap,
  TextBox,
  MiniLogo,
  BigSvg,
  SmallSvg,
  Mini
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

const AnimatedMini = Animatable.createAnimatableComponent(Mini);



export const Home = () => {
  const top = useSelector(state => state.top);
  const animation = useSelector(state => state.animation);
  const color = useSelector(state => state.temperatureStatus);
  const dispatch = useDispatch();
  return (
    <Container>
      <Text>Ultimo aggiornamento: ieri</Text>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? (
          <AnimatedMini 
          color={color.color}
            animation={animation.temperature ? "zoomOut" : 'fadeIn'}
            onAnimationEnd={() => {
              if (animation.temperature === true) {
                dispatch(ANIMATE_TEMPERATURE(false));
                dispatch(SHOW_TEMPERATURE());
              }
            }}
            duration="500"
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => {
              dispatch(ANIMATE_TEMPERATURE(true));
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}>
            <Temperature />
          </AnimatedMini>
        ) : null}
        {top.logo ? (
          <AnimatedMini
          color={color.color}
            animation={animation.logo ? "zoomOut" : 'fadeIn'}
            onPressIn={() => {
              dispatch(ANIMATE_LOGO(true));
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
            onAnimationEnd={() => {
              if (animation.logo === true) {
                dispatch(ANIMATE_LOGO(false));
                dispatch(SHOW_LOGO());
              }
            }}
            duration="500"
            useNativeDriver
            activeOpacity={0.6}>
            <Logo />
          </AnimatedMini>
        ) : null}
        {top.bank ? (
          <AnimatedMini
            duration="500"
color="rgba(218,165,32, 0.5)"
          
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => {
              dispatch(ANIMATE_BANK(true));
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }}
            animation={animation.bank ? "zoomOut" : 'fadeIn'}
            onAnimationEnd={() => {
              if (animation.bank === true) {
                dispatch(ANIMATE_BANK(false));
                dispatch(SHOW_BANK());
              }
            }}>
            <Bank />
          </AnimatedMini>
        ) : null}
      </FlexWrap>
      <TextBox>
        <Text>Lorem ipsum dolor sin amet</Text>
      </TextBox>
      <TextBox>
        <Text>Lorem ipsum dolor sin amet</Text>
      </TextBox>
    </Container>
  );
};
