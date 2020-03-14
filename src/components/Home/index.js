import React from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  Header,
  Description,
  DesignContainer,
  FlexWrap,
  TextBox,
  MiniLogo,
  BigSvg,
  SmallSvg,
  Mini
} from './style';
import { Logo } from './Logo/index';
import { Bank } from './Bank/index';
import { Temperature } from './Temperature/index';
import { TopContainer } from './TopContainer/index';

export const Home = () => {
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        <Mini>
          <Bank />
        </Mini>
        <Mini>
          <SmallSvg>
            <Logo />
          </SmallSvg>
        </Mini>
        <Mini>
          <Temperature />
        </Mini>
      </FlexWrap>
      <TextBox>
        <Text>Lorem ipsum dolor sin amet</Text>
      </TextBox>
      <TextBox>
        <Text>Lorem ipsum dolor sin amet</Text>
      </TextBox>
    </Container>
  );
};
