import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.color};
  shadowOffset: {
  height: 0,
  width: 0
}
  border-radius: 50;
  paddingTop: 20;
  paddingBottom: 20;
  paddingLeft: 20;
  paddingRight: 20;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 50;
  color: ${props => props.theme.text.accent};
`;
export const Description = styled.Text`
  font-size: 17;

  color: ${props => props.theme.text.secondary};
  text-align: center;
`;

export const BigSvg = styled.View`
  width: 100%;
  height: 170;
`;

export const SmallSvg = styled.View`
  width: 50%;
  height: 50%;
`;
