import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 2px;
  color: ${props => props.theme.text.accent};
`;
export const Description = styled.Text`
  font-size: 1px;

  color: ${props => props.theme.text.accent};
  text-align: center;
`;
export const FlexWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
  align-content: stretch;
`;
export const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};

margin-top: 20px;
`;

export const MiniLogo = styled.View``;

export const SmallSvg = styled.View``;

export const Mini = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border-radius: 20px;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 110px;
  max-height: 110px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const LatestUpdate = styled.Text`
  color: ${props => props.theme.text.secondary};
  text-align: center;
  margin-bottom: 10px;
`;
