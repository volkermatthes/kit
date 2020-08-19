import variables from './variables';

const defaultTheme = {
  ...variables,
  grid: {
    gutter: variables.units.base,
  },
  typography: {
    fontSize: {
      h1: '38px',
      h2: '30px',
      h3: '26px',
      h4: '20px',
      h5: '18px',
    },
  },
  queries: {
    small: '480px',
    middle: '624px',
    large: '892px',
    xlarge: '1184px',
  },
};

export default defaultTheme;
