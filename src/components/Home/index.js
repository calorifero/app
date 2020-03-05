import React from "react";
import { Text, View } from "react-native";
import { Container, Header, Description, DesignContainer, Wrap } from "./style";
import { Logo } from "./Logo/index";

export const Home = () => {
  return (
    <Container>
      <DesignContainer>
        <Wrap>
          <Logo />
          <Header>Lorem</Header>
          <Description>Ipsum dolor</Description>
        </Wrap>
      </DesignContainer>
    </Container>
  );
};
