import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${props => props.theme.background};
  flex: 1;
  justify-content: space-around;
`;

export const Header = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
`;

export const ButtonsContainer = styled.View`
  background: rgba(56, 165, 66, 0.63);
  border-radius: 50;
  padding-left: 40;
  padding-right: 40;
  padding-top: 10;
  padding-bottom: 10;
  margin-bottom: 50;
`;

export const TextButton = styled.Text`
  font-size: 25;

  text-align: center;
  color: ${props => props.theme.text.accent};
`;

export const Input = styled.TextInput`
  font-size: 25;
  background: rgba(56, 165, 66, 0.63);
  border-radius: 11;
  paddingtop: 30;
  paddingleft: 15;
  paddingright: 15;
  paddingbottom: 30;
  border: none;
`;

export const Content = styled.View`
  padding-left: 20;
  padding-right: 20;
`;
