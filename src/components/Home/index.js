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
  SmallSvg
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
        <Bank />
        <MiniLogo>
          <SmallSvg>
            <Logo />
          </SmallSvg>
        </MiniLogo>
        <Temperature />
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
