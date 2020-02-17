import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { registerRootComponent } from "expo";
import { useDispatch, useSelector } from "react-redux";
import { Container, Internal, Description } from "./style";
import { CHANGE_TEMPERATURE } from "./action";
export const Temperature = props => {
  const temperature = useSelector(state => state.temperature);
  const dispatch = useDispatch();
  return (
    <Container>
      <Internal>{temperature}°</Internal>
      <Description>Continua così! stai risparmiando sulla bolletta</Description>
      <Button title="Hello" onPress={() => dispatch(CHANGE_TEMPERATURE(25))} />
    </Container>
  );
};
