import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  View
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';
import { Container, Header, ButtonsContainer, TextButton, Input, Content } from './style';
import { SvgComponent } from './svg';

export const Welcome = ({ navigation }) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  useEffect(() => {
    if (value.length === 3) navigation.navigate('Notification');
  });
  return (
    <Container
      contentContainerStyle={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Content>
          <Header>Potresti ricordarci il codice che abbiamo scritto sul termometro?</Header>
          <SvgComponent style={{ marginTop: 30 }} />
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={{ marginTop: 20 }}
            renderCell={({ index, symbol, isFocused }) => (
              <Input key={index} onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Input>
            )}
          />
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
};
