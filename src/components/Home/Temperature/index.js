import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { Container, Internal } from "./style";
export const Temperature = () => {
  return (
    <Container>
      <Internal>18°</Internal>
    </Container>
  );
};
