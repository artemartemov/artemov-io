// import '../fonts/fonts.css';
import layout from './layout';

export default {
  colors: {
    text: '#000',
    primary: '#0e0fed',
    background: 'white',
    secondary: '#000ff',
    accent: '#495057',
    highlight: '#1de9b6',
    muted: '#828291',
    mode: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em'],
  borderWidths: {
    '0': '0',
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      main: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        justifyContent: 'center',
        margin: ['0 1rem', '0 auto'],
        maxWidth: [null, '600px'],
        textAlign: 'left',
      },
      footer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        small: {
          mb: '1rem',
        },
      },
      a: {
        color: 'primary',
        '&:hover': {
          color: 'secondary',
        },
      },
      ul: {
        m: 0,
        p: 0,
        display: 'flex',
        listStyleType: 'none',
        fontSize: [2, 3],
      },
      li: {
        ml: '1rem',
        ':first-of-type': {
          ml: 0,
        },
      },
      p: {
        fontSize: [2, 3],
      },
      h1: {
        variant: 'text.heading',
        fontSize: [5, 6],
        color: 'black',
        wordWrap: 'wrap',
      },
      h2: {
        variant: 'text.heading',
        fontSize: [4, 5],
      },
      h6: {
        fontSize: [2, 3, 4],
      },
    },
  },
  sizes: {
    mainBodyContainer: 768,
  },
  ...layout,
};
