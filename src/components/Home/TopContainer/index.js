import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Description, BigSvg } from './style';
import { Logo } from '../Logo/index';
import { Bank } from '../Bank/Big/index';
import { Temperature } from '../Temperature/Big/index';
import { useSelector } from 'react-redux';

export const TopContainer = () => {
    const top = useSelector(state => state.top);
    return (
        <View >
        {!top.temperature ? <Container><Temperature /></Container> : null}
        {!top.logo ? <Container><BigSvg><Logo /></BigSvg><Header>Lorem</Header><Description>Ipsum dolor</Description></Container> : null}
        {!top.bank ? <Container><Bank /></Container> : null}
        </View>

    );
};
