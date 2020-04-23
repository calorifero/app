import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${props => props.theme.background};
  flex: 1;
  padding-top: 20px;
  justify-content: space-around;
`;

export const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
`;

export const ButtonsContainer = styled.View`
  background: rgba(56, 165, 66, 0.63);
  border-radius: 50px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 50px;
`;

export const TextButton = styled.Text`
  font-size: 25px;

  text-align: center;
  color: ${props => props.theme.text.accent};
`;
export const InputWrapper = styled.View`

    border-radius: 20px;

  border: #8dfd84;
  border-width: 3px;
`;

export const Input = styled.Text`
  font-size: 25px;

  text-align: center;
  width: 60px;
  height: 60px;

  line-height: 60px;
  color: ${props => props.theme.text.accent};
`;

export const Content = styled.View`
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 100px;
`;

export const Here = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: ${props => props.theme.text.secondary};
`;
