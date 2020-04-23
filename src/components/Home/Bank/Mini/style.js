import styled from 'styled-components/native';

export const Container = styled.View`
  text-align: left;
`;

export const Money = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.text.accent};
`;
