import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.highlight};

  border-radius: 20;

  margin-top: 20;
  padding-left: 20;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 20;

  border: ${props => props.color};
  border-width: 3;
`;
export const Header = styled.Text`
  font-size: 30;
  color: ${props => props.theme.text.accent};
`;
export const Body = styled.Text`
  font-size: 15;
  color: ${props => props.theme.text.accent};
`;
