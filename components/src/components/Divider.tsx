import React, { HTMLAttributes, FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

const StyledDivider = styled.span`
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: ${(props: any) => props.theme.units.base} 0;
  background-color: ${(props: any) => props.theme.colors.secondary1};
  height: 1px;
`;

const Divider: FunctionComponent<DividerProps> = ({ ...rest }) => {
  const theme = useContext(ThemeContext);
  return <StyledDivider theme={theme} {...rest} />;
};

export default Divider;
