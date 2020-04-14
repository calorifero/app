import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  Container,
  TopText,
  Money,
  Yes,
  YesButton,
  DoYouAgree,
  No,
  Header,
  ButtonsContainer
} from './style';
import { getPermission } from './getPermission';

export const Notification = () => {
  return (
    <Container>
      <Header>Vorremmo avvisarti quando stai consumando troppo</Header>
      <DoYouAgree>Cosa ne pensi?</DoYouAgree>
      <ButtonsContainer>
        <YesButton onPress={() => getPermission()}>
          <Yes>D'accordo♻️</Yes>
        </YesButton>
        <TouchableOpacity>
          <No>Sto bene così</No>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};
