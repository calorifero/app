import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.Text`
  text-align: center;
  font-size: ${hp('8%')};
`;
export const Description = styled.Text`
  font-size: ${hp('2.5%')};

  text-align: center;
`;
export const DesignContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.35);
`;
