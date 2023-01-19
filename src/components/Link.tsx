import React, { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

export interface LinkProps extends HTMLAttributes<HTMLSpanElement> { }

const StyledLink = styled.span`
  text-decoration: underline;
  color: var(--color-primary3);
  font-size: var(--font-size-base);
  a {
    font-size: var(--font-size-base);
    color: var(--color-primary3);
  }
  &:hover {
    color: var(--color-primary4);
    a {
      color: var(--color-primary4);
    }
  }
`;

const Link: FunctionComponent<LinkProps> = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export { Link };
