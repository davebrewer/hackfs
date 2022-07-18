import React from 'react';
import { PoapsContext } from'./_app';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

import { Grid } from '@material-ui/core';

import Head from 'next/head';


export default function Home() {
  const [poaps, ] = React.useContext(PoapsContext);

  return (
    <div>
      <Head>
        <title>POAPMAN - POAP Management</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container spacing={3} style={{ paddingTop: '80px'}}>
          <Grid item xs="12" >
            <Hero count={poaps && poaps.length} />
          </Grid>
          <Grid item xs="12" >
            <Cards poaps={poaps} />
          </Grid>
        </Grid>
      </main>

      <Footer />
    </div>
  )
}
