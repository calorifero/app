import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import styled from "styled-components/native";
export const Container = styled.ScrollView`
  flex: 1;
`;

export const Logo = styled.Text`
  font-size: ${hp("15%")};
  text-align: center;
`;

export const MessageText = styled.Text`
  font-size: ${hp("2.5%")};
  lineHeight: 20;
`;

export const LeftMessage = styled.View`
  border-radius: ${hp("4%")};
  background-color: lightgrey;
  max-width: 80%;
  padding: 10px;
`;

export const RightMessage = styled(LeftMessage)`
  background-color: red;
  alignSelf: flex-end;
`;

export const StrongMessage = styled(MessageText)`
  font-weight: bold;
`;
