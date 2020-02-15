import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { Container, Logo } from "./style";

import { Temperature } from "./Temperature";

export const Home = () => {
  return (
    <Container>
      <Logo>calòr</Logo>
      <Temperature />
    </Container>
  );
};
