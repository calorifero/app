import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Container, Header, ButtonsContainer, TextButton, Input, Content } from './style';
import { SvgComponent } from './svg';

export const Welcome = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Header>Benvenuto</Header>
          <SvgComponent />
          <Input
            style={{ height: 40 }}
            placeholder="Codice termometro"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
          <ButtonsContainer>
            <TextButton onPress={() => navigation.navigate('Notification')}>Iniziamo</TextButton>
          </ButtonsContainer>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};
