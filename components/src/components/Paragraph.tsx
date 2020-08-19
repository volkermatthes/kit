import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled, { css } from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const StyledParagraph = styled.p`
  font-size: ${(props: any) => props.theme.fonts.baseFontSize};
  color: ${(props: any) => props.theme.colors.black};
  font-weight: 400;
  font-family: ${(props: any) => props.theme.fonts.fonts.secondary};
  line-height: 1.75rem;
`;

const Paragraph: FunctionComponent<ParagraphProps> = ({ children, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledParagraph theme={theme} {...rest}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
