import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${props => props.theme.background};
  flex: 1;
  padding-top: 20;
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
export const InputWrapper = styled.View`
  background-color: #8dfd84;
  border-radius: 10;
`;

export const Input = styled.Text`
  font-size: 25;

  text-align: center;
  width: 60;
  height: 60;

  line-height: 60;
  color: ${props => props.theme.text.accent};
`;

export const Content = styled.View`
  flex-grow: 1;
  padding-left: 20;
  padding-right: 20;
  margin-bottom: 100;
`;

export const Here = styled.Text`
  font-size: 20;
  margin-top: 10;
  color: ${props => props.theme.text.secondary};
`;
