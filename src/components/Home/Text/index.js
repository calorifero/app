import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Body } from './style';

export const Text = () => {
  const color = useSelector(state => state.temperatureStatus);
  return (
    <Container color={color.color}>
      <Header>Hello</Header>
      <Body>Lorem ipsum dolor sin amet</Body>
    </Container>
  );
};
