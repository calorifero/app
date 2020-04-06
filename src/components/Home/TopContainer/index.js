import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Description, BigSvg } from './style';
import { Logo } from '../Logo/index';
import { Bank } from '../Bank/Big/index';
import { Temperature } from '../Temperature/Big/index';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);

export const TopContainer = () => {
  const top = useSelector(state => state.top);
  const animation = useSelector(state => state.animation);
  const color = useSelector(state => state.temperatureStatus)
  console.log(color)
  return (
    <View>
      {!top.temperature ? (
        <AnimatedContainer color={color.color} animation="zoomIn" duration="300" useNativeDriver>
          <Temperature />
        </AnimatedContainer>
      ) : null}
      {!top.logo ? (
        <AnimatedContainer color={color.color} animation="zoomIn" duration="300" useNativeDriver>
          <BigSvg>
            <Logo />
          </BigSvg>
          <Header>Lorem</Header>
          <Description>Ipsum dolor</Description>
        </AnimatedContainer>
      ) : null}
      {!top.bank ? (
        <AnimatedContainer color="red" animation="zoomIn" duration="300" useNativeDriver>
          <Bank />
        </AnimatedContainer>
      ) : null}
    </View>
  );
};
