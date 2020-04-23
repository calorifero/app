import styled from 'styled-components/native';

export const Container = styled.View`
  text-align: left;

  min-height: 200px;
`;
export const TopText = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.text.accent};
`;
export const Heading = styled.Text`
  font-size: 100px;
  color: ${props => props.theme.text.accent};
`;
