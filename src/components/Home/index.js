import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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
import { SHOW_TEMPERATURE } from './action';

export const Home = () => {
  const top = useSelector(state => state.top);
  const dispatch = useDispatch();
  // dispatch(SHOW_TEMPERATURE());
  return (
    <Container>
      <TopContainer />
      <FlexWrap>
        <Mini visibility={top.bank}>
          <Bank />
        </Mini>
        <Mini visibility={top.logo}>
          <SmallSvg>
            <Logo />
          </SmallSvg>
        </Mini>
        <Mini visibility={top.temperature}>
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
