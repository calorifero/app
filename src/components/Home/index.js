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

export const Home = () => {
  return (
    <Container>
      <DesignContainer>
        <BigSvg>
          <Logo />
        </BigSvg>
        <Header>Lorem</Header>
        <Description>Ipsum dolor</Description>
      </DesignContainer>
      <FlexWrap>
        <Bank />
        <MiniLogo>
          <SmallSvg>
            <Logo scale="100%" />
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
