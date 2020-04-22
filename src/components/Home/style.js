import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 2;
  color: ${props => props.theme.text.accent};
`;
export const Description = styled.Text`
  font-size: 1;

  color: ${props => props.theme.text.accent};
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
  shadowColor: ${props => props.theme.text.accent};
  shadowOpacity: 0.50;
  shadowRadius: 10;
  elevation: 5;
margin-top: 20;
`;

export const MiniLogo = styled.View``;

export const SmallSvg = styled.View``;

export const Mini = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border-radius: 20;
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  min-height: 110;
  max-height: 110;
  margin-right: 5;
  margin-left: 5;
`;

export const LatestUpdate = styled.Text`
  color: ${props => props.theme.text.secondary};
  text-align: center;
  margin-bottom: 10;
`;
