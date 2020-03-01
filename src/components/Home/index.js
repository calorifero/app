import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Header,
  Description,
  Logo,
  LeftMessage,
  MessageText,
  RightMessage,
  StrongMessage,
  ModelContainer
} from './style';
import { Design } from './Design/index';

export const Home = () => {
  return (
    <Container>
      <Design />
      <Header>Lorem</Header>
      <Description>Ipsum dolor</Description>
    </Container>
  );
};
