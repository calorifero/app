import React from 'react';
import { Text, View } from 'react-native';
import { Container, Temperature, TopText } from './style'

export const Bank = () => {
  return (
    <Container>
    <TopText>Hai salvato</TopText>
      <Temperature>50€</Temperature>
    </Container>
  );
};
