import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from "styled-components/native";
export const Container = styled.View`
  display: flex;
`;

export const Logo = styled.Text`
  font-size: ${hp('15%')};
  text-align: center;
`;
