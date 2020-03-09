import React from "react";
import { Text, View } from "react-native";
import { Container, Header, Description, DesignContainer, FlexWrap } from "./style";
import { Logo } from "./Logo/index";
import { Bank } from './Bank/index';
import { Temperature } from './Temperature/index';
export const Home = () => {
  return (
    <Container>
      <DesignContainer>
          <Logo />
          <Header>Lorem</Header>
          <Description>Ipsum dolor</Description>
      </DesignContainer>
      <FlexWrap>
      <Bank />
      <Temperature />
      </FlexWrap>
    </Container>
  );
};
