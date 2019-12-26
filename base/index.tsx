const font = {
  type1: 'CircularPro',
  type2: "'CircularPro', 'Noto Sans KR'",
}
const transitions = {
  short: {
    duration: 0.28,
  },
  long: {
    duration: 0.36,
  },
  test: {
    duration: 3,
  },
}

export const themes = {
  light: {
    // Add colors directly, cause shared color from framer canvas make gatsby build error
    key: 'light',
    color: {
      primaryText: '#222222',
      secondaryText: '#5f6368',
      buttonText: '#FFFFFF',
      background: '#FFFFFF',
    },
    font,
    breakpoint: {
      tablet: 1650,
      mobile: 1200,
    },
    transitions,
  },
  dark: {
    // Add colors directly, cause shared color from framer canvas make gatsby build error
    key: 'dark',
    color: {
      primaryText: '#FFFFFF',
      secondaryText: '#FFFFFF',
      buttonText: '#FFFFFF',
      background: '#0A0A0A',
    },
    font,
    breakpoint: {
      tablet: 1650,
      mobile: 1200,
    },
    transitions,
  },
}
