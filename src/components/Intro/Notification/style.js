import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${props => props.theme.background};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const YesButton = styled.TouchableOpacity`
  display: flex;
  background: #8dfd84;
  border-radius: 50px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const StyleSvg = styled.View`
  height: 55%;
  width: 100%;
`;

export const Yes = styled.Text`
  font-size: 25px;

  text-align: center;
  color: ${props => props.theme.text.accent};
`;

export const No = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: ${props => props.theme.text.secondary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.text.secondary};
  text-align: center;
`;

export const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.text.accent};
  z-index: 10;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  margin-bottom: 50px;
`;
