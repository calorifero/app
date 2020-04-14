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

export const YesButton = styled.TouchableOpacity`
  display: flex;
  background: green;
  border-radius: 50;
  padding-left: 40;
  padding-right: 40;
  padding-top: 10;
  padding-bottom: 10;
`;

export const Yes = styled.Text`
  font-size: 30;

  text-align: center;
  color: ${props => props.theme.text.accent};
`;

export const No = styled.Text`
  margin-top: 10;
  font-size: 18;
  color: ${props => props.theme.text.secondary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.text.secondary};
  text-align: center;
`;

export const Header = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
`;

export const ButtonsContainer = styled.View`
  align-items: center;
`;

export const DoYouAgree = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
`;
