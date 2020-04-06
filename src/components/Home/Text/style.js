import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.background};
  shadowOffset: {
  height: 0,
  width: 0
}
  border-radius: 50;
  shadowColor: ${props => props.theme.text.accent};
shadowOpacity: 0.2;
shadowRadius: 10;
elevation: 5;
margin-top: 20;
paddingLeft: 20;
paddingTop: 10;
paddingRight: 10;
paddingBottom: 20;
`;

export const Header = styled.Text`
  font-size: 30;
  color: ${props => props.theme.text.accent};
`
export const Body = styled.Text`
  font-size: 15;
  color: ${props => props.theme.text.accent};
`