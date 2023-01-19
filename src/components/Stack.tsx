import React from "react";
import { FunctionComponent, HTMLAttributes } from "react";
import styled from "styled-components";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  width?: string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  width: ${({ width }: StackProps): string => (width ? width : "100%")};
  flex-direction: ${({ direction }: StackProps): string =>
    direction ? direction : "column"};
  align-items: ${({ alignItems }: StackProps): string =>
    alignItems ? alignItems : "flex-start"};
  justify-content: ${({ justifyContent }: StackProps): string =>
    justifyContent ? justifyContent : "flex-start"};
  gap: ${({ gap }: StackProps): number => (gap ? gap : 0)}px;
  @media only screen and (max-width: 800px) {
    flex-direction: column !important;
    width: 100% !important;
  }
`;

const Stack: FunctionComponent<StackProps> = ({ children, ...rest }) => {
  return <StyledStack {...rest}>{children}</StyledStack>;
};

export { Stack };
