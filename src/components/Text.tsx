import React from 'react';
import { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const StyledText = styled.span<TextProps>`
  font-size: ${({ size }: TextProps): string => (size ? size + 'px' : '16px')};
  color: ${({ color }: TextProps) => (color ? color : '#000')};
  font-weight: ${({ fontWeight }: TextProps) => (fontWeight ? fontWeight : 600)};
`;

const Text: FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export { Text };
