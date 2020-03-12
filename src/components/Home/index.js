import React from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Description, DesignContainer, FlexWrap, TextBox } from './style';
import { Logo } from './Logo/index';
import { Bank } from './Bank/index';
import { Temperature } from './Temperature/index';

export const Home = () => {
  return (
    <Container>
      <DesignContainer>
        <Logo />
        <Header>Lorem</Header>
        <Description>Ipsum dolor</Description>
      </DesignContainer>
      <FlexWrap>
        <Bank />
        <Temperature />
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
