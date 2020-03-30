import React, { useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';
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
import { SHOW_TEMPERATURE, SHOW_LOGO, SHOW_BANK, ANIMATE_TEMPERATURE, ANIMATE_LOGO, ANIMATE_BANK } from './action';

const AnimatedMini = Animatable.createAnimatableComponent(Mini);

export const Home = () => {
  const top = useSelector(state => state.top);
    const animation = useSelector(state => state.animation);
  const dispatch = useDispatch();
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? (
          <AnimatedMini
            animation={animation.temperature ? 'zoomOut' : 'zoomIn'}
            onAnimationEnd={() => {
              if (animation.temperature === true) {
              dispatch(ANIMATE_TEMPERATURE(false));
                dispatch(SHOW_TEMPERATURE());

              }
            }}
            duration="300"
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() =>
            dispatch(ANIMATE_TEMPERATURE(true))}>
            <Temperature />
          </AnimatedMini>
        ) : null}
        {top.logo ? (
          <AnimatedMini
            animation={animation.logo ? 'zoomOut' : 'zoomIn'}
            onPressIn={() => dispatch(ANIMATE_LOGO(true))}
            onAnimationEnd={() => {
              if (animation.logo === true) {
              dispatch(ANIMATE_LOGO(false));
                dispatch(SHOW_LOGO());

              }
            }}
            duration="300"
            useNativeDriver
            activeOpacity={0.6}>
            <Logo />
          </AnimatedMini>
        ) : null}
        {top.bank ? (
          <AnimatedMini
            duration="300"
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => dispatch(ANIMATE_BANK(true))}
            animation={animation.bank ? 'zoomOut' : 'zoomIn'}
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
