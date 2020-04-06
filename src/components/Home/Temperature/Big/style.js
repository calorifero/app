import styled from 'styled-components/native';

export const Container = styled.View`
  text-align: left;

  min-height: 200;
`;
export const TopText = styled.Text`
  font-size: 30;
  color: ${props => props.theme.text.accent}
`;
