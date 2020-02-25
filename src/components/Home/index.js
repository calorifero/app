import React from "react";
import {
  Container,
  Logo,
  LeftMessage,
  MessageText,
  RightMessage,
  StrongMessage,
  ModelContainer
} from "./style";

export const Home = () => {
  return (
    <Container>
      <RightMessage>
        <MessageText>Calòr, qual'è la temperatura di casa?</MessageText>
      </RightMessage>
      <ModelContainer>
      <LeftMessage>
        <MessageText>Questa settimana ho registrato 18 gradi</MessageText>
      </LeftMessage>
      <LeftMessage>
        <StrongMessage>La temperatura è perfetta</StrongMessage>
        <MessageText>
          Fino a ora hai risparmiato 100€ Continua così!
        </MessageText>
      </LeftMessage>
      </ModelContainer>
    </Container>
  );
};
