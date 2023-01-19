import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}

const Headline1 = styled.h1`
  font-family: var(--font-secondary);
  font-size: var(--font-size-h1);
  color: var(--color-black);
`;

const Headline2 = styled.h2`
  font-size: var(--font-size-h2);
  color: var(--color-black);
`;

const Headline3 = styled.h3`
  font-size: var(--font-size-h3);
  color: var(--color-black);
`;

const Headline4 = styled.h4`
  font-size: var(--font-size-h4);
  color: var(--color-secondary3);
  font-weight: 400;
`;

const Headline5 = styled.h5`
  font-size: var(--font-size-h5);
  color: var(--color-black);
`;

const Title: FunctionComponent<TitleProps> = ({ level = 1, children, ...rest }) => {
  switch (level) {
    case 2:
      return <Headline2 {...rest}>{children}</Headline2>;
    case 3:
      return <Headline3 {...rest}>{children}</Headline3>;
    case 4:
      return <Headline4 {...rest}>{children}</Headline4>;
    case 5:
      return <Headline5 {...rest}>{children}</Headline5>;
    default:
      return <Headline1 {...rest}>{children}</Headline1>;
  }
};

export { Title };
