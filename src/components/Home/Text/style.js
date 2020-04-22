import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.highlight};

  border-radius: 20;

  margin-top: 20;
  paddingleft: 20;
  paddingtop: 10;
  paddingright: 10;
  paddingbottom: 20;

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
