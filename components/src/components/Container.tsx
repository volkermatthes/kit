import React, { FunctionComponent, HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import ThemeContext from '../utils/themeProvider';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  @media (min-width: ${(props: any) => props.breakpoint}) {
    width: 740px;
  }
`;

const Container: FunctionComponent<ContainerProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return <StyledContainer breakpoint={theme.queries.large} {...rest}>{children}</StyledContainer>;
};

export default Container;
