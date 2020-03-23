import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.background};
  shadowOffset: {
  height: 0,
  width: 0
}
  border-radius: 50;
  shadowColor: ${props => props.theme.text};
  shadowOpacity: 0.50;
  shadowRadius: 10;
  elevation: 5;
  paddingTop: 20;
  paddingBottom: 20;
  paddingLeft: 20;
  paddingRight: 20;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: ${hp('8%')}
  color: ${props => props.theme.text};
`;
export const Description = styled.Text`
  font-size: ${hp('2.5%')};

  color: ${props => props.theme.text};
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
