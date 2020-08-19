import React, { FunctionComponent } from "react";
import { createGlobalStyle } from 'styled-components';
import defaultTheme from '../theme/theme';
import ThemeContext from '../utils/themeProvider';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }
  body {
    overflow: hidden;
    font-family: ${(props: any) => props.theme.fonts.fonts.primary};
    font-weight: 500;
    font-size: ${(props: any) => props.theme.fonts.baseFontSize};
  }
  a {
    text-decoration: none;
  }
`;

interface BodyProps {
  theme?: object;
}

const Body: FunctionComponent<BodyProps> = ({ theme, children }) => {
  console.log(theme);
  return (
    <ThemeContext.Provider
      value={theme}
    >
      <GlobalStyle theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
};

Body.defaultProps = {
  theme: defaultTheme
}

export default Body;