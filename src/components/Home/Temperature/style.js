import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from "styled-components/native";
export const Container = styled.View`
  display: flex;
`;

export const Internal = styled.Text`
  color: green;
  font-size: ${hp('15%')};
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: ${hp('2%')};
  text-align: center;
`;
