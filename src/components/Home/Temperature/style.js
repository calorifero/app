import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
  shadowOffset: {
  height: 0,
  width: 0
}
border-radius: 30;
  shadowColor: ${props => props.theme.text};
shadowOpacity: 0.50;
shadowRadius: 10;
elevation: 5;
flex: 1;
display: none;
`;
