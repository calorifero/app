import React, { useEffect, useState } from 'react';
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
import { SHOW_TEMPERATURE, SHOW_LOGO, SHOW_BANK } from './action';

const AnimatedMini = Animatable.createAnimatableComponent(Mini);

export const Home = () => {
  const top = useSelector(state => state.top);
  const dispatch = useDispatch();
  const [temp, changeTemp] = useState(0);
  const [log, changeLog] = useState(0);
  const [ban, changeBan] = useState(0);
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? (
          <AnimatedMini
            animation={temp ? 'slideOutUp' : 'zoomInDown'}
            onAnimationEnd={() => {
              if (temp === 1) {
                dispatch(SHOW_TEMPERATURE());
                changeTemp(0);
              }
            }}
            duration="300"
            useNativeDriver
            activeOpacity={0.6}
            onPressIn={() => changeTemp(1)}>
            <Temperature />
          </AnimatedMini>
        ) : null}
        {top.logo ? (
          <AnimatedMini
            animation={!log ? 'slideOutUp' : 'zoomInDown'}
            onPressIn={() => changeLog(1)}
            onAnimationEnd={() => {
              if (log === 1) {
                dispatch(SHOW_LOGO());
                changeLog(0);
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
            onPressIn={() => changeBan(1)}
            animation={!ban ? 'slideOutUp' : 'zoomInDown'}
            onAnimationEnd={() => {
              if (ban === 1) {
                dispatch(SHOW_BANK());
                changeBan(0);
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
