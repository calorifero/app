import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Description, BigSvg } from './style';
import { Logo } from '../Logo/index';
import { Bank } from '../Bank/Big/index';
import { Temperature } from '../Temperature/Big/index';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const AnimatedContainer = Animatable.createAnimatableComponent(Container);


export const TopContainer = () => {
    const top = useSelector(state => state.top);
    return (
        <View >
        {!top.temperature ? <AnimatedContainer animation="zoomIn" duration="400"
      useNativeDriver={true}><Temperature /></AnimatedContainer> : null}
        {!top.logo ? <AnimatedContainer animation="zoomIn" duration="400"
      useNativeDriver={true}><BigSvg><Logo /></BigSvg><Header>Lorem</Header><Description>Ipsum dolor</Description></AnimatedContainer> : null}
        {!top.bank ? <AnimatedContainer animation="zoomIn" duration="400"
      useNativeDriver={true}><Bank /></AnimatedContainer> : null}
        </View>

    );
};
