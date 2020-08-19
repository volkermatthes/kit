import React, { FunctionComponent, HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../utils/themeProvider';

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}

const Headline1 = styled.h1`
  font-family: ${(props: any) => props.font};
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
`;

const Headline2 = styled.h2`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
`;

const Headline3 = styled.h3`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
`;

const Headline4 = styled.h4`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
  font-weight: 400;
`;

const Headline5 = styled.h5`
  font-size: ${(props: any) => props.fontSize};
  color: ${(props: any) => props.color};
`;

const Headline: FunctionComponent<HeadlineProps> = ({ level, children, ...rest }) => {
  const theme = useContext(ThemeContext);
  switch (level) {
    case 2:
      return (
        <Headline2 fontSize={theme.typography.fontSize.h2} color={theme.colors.black} {...rest}>
          {children}
        </Headline2>
      );
    case 3:
      return (
        <Headline3 fontSize={theme.typography.fontSize.h3} color={theme.colors.black} {...rest}>
          {children}
        </Headline3>
      );
    case 4:
      return (
        <Headline4 fontSize={theme.typography.fontSize.h4} color={theme.colors.secondary3} {...rest}>
          {children}
        </Headline4>
      );
    case 5:
      return (
        <Headline5 fontSize={theme.typography.fontSize.h5} color={theme.colors.black} {...rest}>
          {children}
        </Headline5>
      );
    default:
      return (
        <Headline1
          fontSize={theme.typography.fontSize.h1}
          color={theme.colors.black}
          font={theme.fonts.fonts.secondary}
          {...rest}
        >
          {children}
        </Headline1>
      );
  }
};

Headline.defaultProps = {
  level: 1,
};

export default Headline;
