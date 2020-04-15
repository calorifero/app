import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Header, ButtonsContainer, TextButton } from './style';

export const Welcome = ({ navigation }) => {
  return (
    <Container>
      <Header>Benvenuto</Header>
      <ButtonsContainer>
        <TextButton onPress={() => navigation.navigate('Notification')}>Iniziamo</TextButton>
      </ButtonsContainer>
    </Container>
  );
};
