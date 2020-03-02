import styled from 'styled-components/native';
import theme from 'styled-theming';

export const Theme = styled.View`
  background-color: ${props => props.theme.colors.background};
`;
