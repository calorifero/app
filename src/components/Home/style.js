import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Logo = styled.Text`
  font-size: ${hp('15%')};
  text-align: center;
`;

export const MessageText = styled.Text`
  font-size: ${hp('2.5%')};
  lineheight: 20;
`;

export const LeftMessage = styled.View`
  border-radius: ${hp('4%')};
  background-color: #aaffa0;
  max-width: 80%;
  margintop: 5;
  marginbottom: 5;
  marginleft: 10;
  marginright: 10;
  paddingleft: 12;
  paddingright: 12;
  paddingtop: 12;
  paddingbottom: 12;
`;

export const RightMessage = styled(LeftMessage)`
  background-color: #f4ffbc;
  alignself: flex-end;
`;

export const StrongMessage = styled(MessageText)`
  font-weight: bold;
`;

export const ModelContainer = styled.View`
  background-color: black;
  margintop: 50;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: ${hp('8%')};
`;
export const Description = styled.Text`
  font-size: ${hp('2.5%')};

  text-align: center;
`;
