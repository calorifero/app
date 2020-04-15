import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
`;

export const Header = styled.Text`
  font-size: 30;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
  z-index: 10;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  background: rgba(56, 165, 66, 0.63);
  border-radius: 50;
  padding-left: 40;
  padding-right: 40;
  padding-top: 10;
  padding-bottom: 10;
`;

export const TextButton = styled.Text`
  font-size: 25;

  text-align: center;
  color: ${props => props.theme.text.accent};
`;
