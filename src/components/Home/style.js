import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};

  margin-left: 5;
  margin-right: 5;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;

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
export const FlexWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;

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
  shadowColor: ${props => props.theme.text};
  shadowOpacity: 0.50;
  shadowRadius: 10;
  elevation: 5;
margin-top: 20;
`;

export const MiniLogo = styled.View``;

export const SmallSvg = styled.View`
`;

export const Mini = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.background};
shadowOffset: {
  height: 0,
  width: 0
}
border-radius: 20;
shadowColor: ${props => props.theme.text};
shadowOpacity: 0.50;
shadowRadius: 10;
elevation: 5;
flex: 1;
padding-top: 10;
padding-bottom: 10;
min-height: 100;
max-height: 100;
`;
