import React from 'react'
import { getPoaps } from '../helpers/api';

export const PoapsContext = React.createContext();
import { CssBaseline, MuiThemeProvider, Container } from '@material-ui/core';
import theme from '../theme';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {

  const [poaps, setsPoaps] = React.useState(null);
  
  const setupPoaps = async (savedLsPoaps) => {
    const poapCollection = await getPoaps(savedLsPoaps);
    setsPoaps(poapCollection);
  }

  React.useEffect(() => {
    const savedLsPoaps = window.localStorage.getItem('lsPoaps');
    savedLsPoaps ? setupPoaps(savedLsPoaps) : setsPoaps([]);
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <PoapsContext.Provider value={[poaps, setsPoaps]}>
        <CssBaseline />
        <Nav />
        <Container maxWidth="xs">
          <Component {...pageProps} />
        </Container>
      </PoapsContext.Provider>
    </MuiThemeProvider>
  );
}

export default MyApp;
