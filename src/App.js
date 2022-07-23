import React from 'react';
import { PoapsContext } from'./index.js';
import Hero from './components/Hero';
import Cards from './components/Cards';
import './App.css';

import { Grid } from '@material-ui/core';

export default function Home() {
  const [poaps, ] = React.useContext(PoapsContext);

  return (
    <div>
      <main className='container-margin-top'>
        <Grid container className="card card-padding">
          { poaps && poaps.length > 0 && (
            <Grid item xs="12" style={{marginBottom: '20px'}}>
              <Hero count={poaps && poaps.length} />
            </Grid>
          )}
          <Grid item xs="12">
            <Cards poaps={poaps} />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}