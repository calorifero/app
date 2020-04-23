import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.color};
  border-radius: 50px;
  paddingTop: 20px;
  paddingBottom: 20px;
  paddingLeft: 20px;
  paddingRight: 20px;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 50px;
  color: ${props => props.theme.text.accent};
`;
export const Description = styled.Text`
  font-size: 17px;

  color: ${props => props.theme.text.secondary};
  text-align: center;
`;

export const BigSvg = styled.View`
  width: 100%;
  height: 170px;
`;

export const SmallSvg = styled.View`
  width: 50%;
  height: 50%;
`;
