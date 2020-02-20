import React from "react";
import {
  Container,
  Logo,
  LeftMessage,
  MessageText,
  RightMessage
} from "./style";

export const Home = () => {
  return (
    <Container>
      <Logo>calòr</Logo>
      <LeftMessage>
        <MessageText>Hello</MessageText>
      </LeftMessage>
      <RightMessage>
        <MessageText>Hello</MessageText>
      </RightMessage>
    </Container>
  );
};
