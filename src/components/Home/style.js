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
  background-color: #AAFFA0;
  max-width: 80%;
  marginTop: 5;
  marginBottom: 5;
  marginLeft: 10;
  marginRight: 10;
  paddingLeft: 12;
  paddingRight: 12;
  paddingTop: 12;
  paddingBottom: 12;
`;

export const RightMessage = styled(LeftMessage)`
  background-color: #F4FFBC;
  alignSelf: flex-end;
`;

export const StrongMessage = styled(MessageText)`
  font-weight: bold;
`;

export const ModelContainer = styled.View`
  background-color: black;
  marginTop: 50;
`;