import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 var(--units-base);
  @media (min-width: var(--query-large)) {
    width: var(--container-width);
  }
`;

const Container: FunctionComponent<ContainerProps> = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
