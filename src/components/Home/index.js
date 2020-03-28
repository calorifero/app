import React, { useEffect, useState } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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
import * as Animatable from 'react-native-animatable';

const AnimatedMini = Animatable.createAnimatableComponent(Mini);


export const Home = () => {
  const top = useSelector(state => state.top);
  const dispatch = useDispatch();
  const [temp, changeTemp] = useState(0);
  const temperature = new Animated.Value(0);
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? <AnimatedMini      animation={!temp ? "zoomIn": "zoomOut"} onAnimationEnd={() => {console.log(temp); if (temp === 1) {dispatch(SHOW_TEMPERATURE()); changeTemp(0)} }} duration="1000"
      useNativeDriver={true} activeOpacity={0.6} onPressIn={() => changeTemp(1)}><Temperature /></AnimatedMini> : null}
        {top.logo ? <AnimatedMini animation="zoomIn" duration="200"
      useNativeDriver={true} activeOpacity={0.6}  onPressIn={() => dispatch(SHOW_LOGO())}><Logo /></AnimatedMini>: null}
        {top.bank ? <AnimatedMini animation="zoomIn" duration="200"
      useNativeDriver={true} activeOpacity={0.6} onPressIn={() => dispatch(SHOW_BANK())}><Bank /></AnimatedMini>: null}
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
