import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Description, DesignContainer } from './style';
import { Logo } from './Logo/index';

export const Home = () => {
  return (
    <Container>
      <DesignContainer>
        <Logo />
      </DesignContainer>
      <Header>Lorem</Header>
      <Description>Ipsum dolor</Description>
    </Container>
  );
};
