import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const StyledParagraph = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-weight: 400;
  font-family: var(--font-secondary);
  line-height: 1.75rem;
`;

const Paragraph: FunctionComponent<ParagraphProps> = ({ children, ...rest }) => {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

export default Paragraph;
