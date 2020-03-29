import React from 'react';
import { Text, View } from 'react-native';
import { Container, TopText, Money } from './style';

export const Bank = () => {
  return (
    <Container>
      <TopText>Hai salvato</TopText>
      <Money>50€</Money>
    </Container>
  );
};
