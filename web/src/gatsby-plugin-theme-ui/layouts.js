import { baselineMultiple } from './verticalRhythm';

export default {
  layouts: {
    footer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'start',
      marginTop: 'auto',
      small: {
        my: '1rem',
        fontSize: '1rem',
      },
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      maxWidth: ['none', '60vw'],
      mx: 'auto',
      px: ['0.5rem', '0'],
      '& h1': {
        fontSize: [0, 1, 2, 3],
        lineHeight: [1, 3, 3],
      },
      '& h2': {
        fontSize: ['1rem', 0, 1],
        fontWeight: '700',
        mt: [baselineMultiple(0.25), baselineMultiple(1)],
      },

      '& main': {
        mt: 'auto',
      },
    },
    coverPage: {
      backgroundColor: 'primary',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '4%',
      color: 'white',
      '& h1': {
        margin: '0',
      },
    },
    textPage: {
      padding: '4%',
      maxWidth: '65vw',
      '& ul': {
        ml: '0',
        pl: '0',
      },
    },
    splitPage: {
      padding: '4%',
      display: 'grid',
      maxWidth: '100vw',
      gridTemplateColumns: '1fr 1fr',
      justifyItems: 'center',
      '& img': {
        display: 'grid',
        maxWidth: '45vw',
      },
      '& pre': {
        fontSize: '.5em',
        padding: '2% 3% 0 3%',
      },
    },
    splitPageText: {
      padding: '4%',
      display: 'grid',
      maxWidth: '100vw',
      width: '100vw',
      gridTemplateColumns: '1fr 55vw',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '60vh',
        width: 'auto',
        height: 'auto',
      },
    },
    defaultTextWithImage: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '4%',
      '& img': {
        maxWidth: '90vw',
        maxHeight: '60vh',
        borderRadius: '0.25em',
        boxShadow:
          '0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)',
      },
    },
    fullImagePage: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '4%',
      '& img': {
        width: '100%',
        maxWidth: '80vw',
        maxHeight: '80vh',
        mx: 'auto',
      },
    },
    codePage: {
      backgroundColor: '#011627',
      width: '100vw',
      height: '100vh',
      fontSize: '1.1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  header: {
    color: 'white',
    backgroundColor: 'black',
  },
};
