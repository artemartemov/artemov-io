import Typography from 'typography';

const typography = new Typography({
  title: 'artemov.io',
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  scaleRatio: 2.625,
  headerFontFamily: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Droid Sans',
    'Helvetica Neue',
    'Noto Sans',
    'sans-serif',
  ],
  bodyFontFamily: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Droid Sans',
    'Helvetica Neue',
    'Noto Sans',
    'sans-serif',
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
