// import '../fonts/fonts.css';
import layouts from './layouts';

const BASE_FONT = 16;
const BASE_LINE_HEIGHT = 1.5;
const BASELINE = BASE_FONT * BASE_LINE_HEIGHT;
const RATIO = 1.333;

// [ 16, 23, 32, 45, 64, 90 ]
const FONT_SIZES = [0, 1, 2, 3, 4, 5].map((n) => Math.round(BASE_FONT * RATIO ** n));

// [ 1.5, 1.0435, 1.5, 1.0667, 1.125, 1.0667 ]
const LINE_HEIGHTS = FONT_SIZES.map((f) => (Math.ceil(f / BASELINE) * BASELINE) / f);

console.log(LINE_HEIGHTS);

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
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em'],
  borderWidths: {
    '0': '0',
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  sizes: {
    mainBodyContainer: 768,
  },
  ...layouts,
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 0,
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
        fontSize: [0],
      },
      li: {
        ml: '1rem',
        ':first-of-type': {
          ml: 0,
        },
      },
      h1: {
        fontSize: [5],
        lineHeight: [5],
        color: 'black',
        wordWrap: 'wrap',
      },
      h2: {
        fontSize: [4],
        lineHeight: [4],
      },
      h3: {
        fontSize: [3],
        lineHeight: [3],
      },
      h4: {
        fontSize: [2],
        lineHeight: [2],
      },
      h5: {
        fontSize: [1],
        lineHeight: [1],
      },
      h6: {
        fontSize: [0],
        lineHeight: [0],
      },
    },
  },
};
