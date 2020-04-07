import React from 'react';
import { Text, View } from 'react-native';
import { Container, TopText, Heading } from './style';

export const Temperature = () => {
  return (
    <Container>
      <TopText>Temperature</TopText>
      <Heading>39°</Heading>
    </Container>
  );
};
