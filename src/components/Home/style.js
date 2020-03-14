import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
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
export const DesignContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
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
margin-left: 40;
margin-right: 40;
margin-top: 20;
`;
export const FlexWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 40;
  margin-right: 40;

  margin-top: 20;
  align-content: stretch;
`;
export const TextBox = styled.View`
  align-items: center;
  justify-content: center;
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

margin-left: 40;
margin-right: 40;
margin-top: 20;
`;

export const MiniLogo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
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
  flex: 1;
`;

export const BigSvg = styled.View`
  width: 70%;
  height: 70%;
`;

export const SmallSvg = styled.View`
  width: 50%;
  height: 50%;
`;
