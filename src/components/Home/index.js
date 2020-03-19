import React, { useEffect } from 'react';
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
import { Bank } from './Mini/Bank/index';
import { Temperature } from './Mini/Temperature/index';
import { TopContainer } from './TopContainer/index';
import { SHOW_TEMPERATURE, SHOW_LOGO, SHOW_BANK } from './action';

export const Home = () => {
  const top = useSelector(state => state.top);
  const dispatch = useDispatch();

  const temperature = new Animated.Value(0);
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        {top.temperature ? <Mini onPress={() => dispatch(SHOW_TEMPERATURE())}><Temperature /></Mini> : null}
        {top.logo ? <Mini onPress={() => dispatch(SHOW_LOGO())}><Logo /></Mini>: null}
        {top.bank ? <Mini onPress={() => dispatch(SHOW_BANK())}><Bank /></Mini>: null}
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
