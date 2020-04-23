import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.highlight};

  border-radius: 20px;

  margin-top: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 20px;

  border: ${props => props.color};
  border-width: 3px;
`;
export const Header = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.text.accent};
`;
export const Body = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.text.accent};
`;
