import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import styled from "styled-components/native";
export const Container = styled.View`
  display: flex;
`;

export const Logo = styled.Text`
  font-size: ${hp("15%")};
  text-align: center;
`;

export const MessageText = styled.Text`
  font-size: ${hp("2.5%")};
`;

export const LeftMessage = styled.View`
  border-radius: ${hp("4%")};
  background-color: lightgrey;
  max-width: 80%;
  padding: 3%;
  margin: 1% 0 1% 3%;
`;

export const RightMessage = styled(LeftMessage)`
  background-color: red;
  right: 0;

  margin: 1% 3% 1% 0;
  alignSelf: flex-end;
`;

export const StrongMessage = styled(MessageText)`
  font-weight: bold;
`;
