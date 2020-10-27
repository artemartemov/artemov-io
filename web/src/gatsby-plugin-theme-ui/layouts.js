export default {
  layouts: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
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
        maxWidth: '100vw',
        maxHeight: '80vh',
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
  footer: {
    color: 'white',
    backgroundColor: 'black',
  },
};
