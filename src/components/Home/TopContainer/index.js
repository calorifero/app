import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Description, BigSvg } from './style';
import { Logo } from '../Logo/index';
import { Bank } from '../Bank/index';
import { Temperature } from '../Temperature/index';

export const TopContainer = () => {
    return (
        <Container>
            <BigSvg>
                <Logo />
            </BigSvg>
            <Header>Lorem</Header>
            <Description>Ipsum dolor</Description>
        </Container>
    );
};
