import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import {
  Container,
  TopText,
  Money,
  Yes,
  YesButton,
  No,
  Header,
  ButtonsContainer,
  StyleSvg
} from './style';
import { getPermission } from './getPermission';
import { Svgs } from './svg';

export const Notification = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>Vorremmo avvisarti quando stai consumando troppo</Header>
      <StyleSvg>
        <Svgs />
      </StyleSvg>
      <ButtonsContainer>
        <YesButton
          onPress={() => {
            getPermission();
            dispatch({ type: 'HOME' });
          }}>
          <Yes>D'accordo♻️</Yes>
        </YesButton>
        <TouchableOpacity>
          <No onPress={() => navigation.navigate('Home')}>Sto bene così</No>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};
