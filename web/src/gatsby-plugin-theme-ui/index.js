// import '../fonts/fonts.css';
import layouts from './layouts';
import '../fonts/fonts.css';
import components from './components'

import nightOwl from '@theme-ui/prism/presets/night-owl'

const BASE_FONT = 32;
const BASE_LINE_HEIGHT = 1.5;
const BASELINE = BASE_FONT * BASE_LINE_HEIGHT;

const BREAKPOINTS = ['768px', '960px', '1200px', '1220px'];

const RATIO = 1.33;

// [ 16, 23, 32, 45, 64, 90 ]
const FONT_SIZES = [0, 1, 2, 3, 4, 5].map((n) => Math.round(BASE_FONT * RATIO ** n));

// [ 1.5, 1.0435, 1.5, 1.0667, 1.125, 1.0667 ]
const LINE_HEIGHTS = FONT_SIZES.map((f) => (Math.ceil(f / BASELINE) * BASELINE) / f);

const baselineMultiple = (w) => (theme) => theme.baseline * w;

const SPACE = [0, 1, 2, 4, 8].map((s) => s * BASELINE);

const COLORS = {
  text: '#000',
  primary: '#0e0fed',
  background: '#ffffff',
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
};

const Heading = {
  fontFamily: 'heading',
};

const HeadingH1 = {
  ...Heading,
  fontSize: [1, 2, 3],
  lineHeight: [1, 2, 3],
  fontWeight: '900',
  letterSpacing: '-0.025em'
};

const HeadingH2 = {
  ...Heading,
  fontSize: [1, 2],
  lineHeight: [1],
  mb: 0,
  fontWeight: '900',

  '* + &': {
    mt: 2,
  },
};

const HeadingH3 = {
  fontSize: [1],
  lineHeight: [1],
  fontWeight: '900',

  '* + &': {
    mt: 2,
  },
};

const HeadingH4 = {
  fontSize: [0, 1],
  lineHeight: [0, 1],
  fontWeight: '700',

  '* + &': {
    mt: baselineMultiple(1.5),
  },
};

const HeadingH5 = {
  fontSize: [0, 1],
  fontWeight: 'body',
  textTransform: 'uppercase',

  '* + &': {
    mt: baselineMultiple(1.5),
  },
};

const HeadingH6 = {
  fontSize: [0],
  fontWeight: '700',

  '* + &': {
    mt: baselineMultiple(0.75),
  },
};

export default {
  ...components,
  baseline: BASELINE,
  space: SPACE,

  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,

  breakpoints: BREAKPOINTS,

  mediaQueries: {
    medium: `@media screen and (min-width: ${BREAKPOINTS[0]})`,
    large: `@media screen and (min-width: ${BREAKPOINTS[1]})`,
  },

  colors: COLORS,
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },

  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
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
      h1: {
        ...HeadingH1,
      },
      h2: {
        ...HeadingH2,
      },
      h3: {
        ...HeadingH3,
      },
      h4: {
        ...HeadingH4,
      },
      h5: {
        ...HeadingH5,
      },
      h6: {
        ...HeadingH6,
      },
      p: {
        mt: baselineMultiple(0.75),
      },

      strong: {
        fontWeight: 'bold',
      },

      em: {
        fontStyle: 'italic',
      },

      ul: {
        mt: baselineMultiple(0.75),
        px: [1],
        li: {
          listStyleType: 'square',
        },
      },
      ol: {
        mt: baselineMultiple(0.75),
        px: [1, 2],
        li: {
          listStyleType: 'number',
        },
      },
      li: {
        mt: baselineMultiple(0.5),

      },
      video: {
        width: '100%',
        maxWidth: '100%',
        height: '100%',
      },
      pre: {
        ...nightOwl,
      }
    },
    SingleVideo: {
      width: '80%',
      borderRadius: '0.35em',
      boxShadow: '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
      '& video': {
        borderRadius: '0.35em',
      }
    },
    Slide: {
      textAlign: 'left',
      alignItems: 'start',
    },
  },
  lists: {
    homepage: {
      m: 0,
      p: 0,
      display: 'flex',
      fontSize: [0],
      li: {
        listStyleType: 'none',
        ml: '1rem',
        ':first-of-type': {
          ml: 0,
        },
      },
    },
  },
};
