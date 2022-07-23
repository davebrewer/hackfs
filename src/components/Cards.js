import React from 'react';

import { Link } from "react-router-dom";

import { Grid, Card, CardContent, Button } from '@material-ui/core';
import { Settings, Add } from '@material-ui/icons';

const Cards = ({poaps}) => {
    if (!poaps) {
      return (<div>Loading...</div>)
    }

    console.log(poaps);

    if (poaps && poaps.length === 0) {
      return (
      <div>
        <h1>You have no POAPs!</h1>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/manage"><Button variant="outlined" startIcon={<Settings />}>Manage</Button></Link>
          <Link className='ButtonContained' to="/create"><Button variant="contained" startIcon={<Add />}>Create</Button></Link>
        </div>
      </div>);
    }

    return (
      <Grid container>
        {poaps && poaps.map(poap => {
          return(
            <Grid key={poap.id} item xs="12" className='card-item'>
              <Link to={`/poap/${poap.id}`} className='card-link'>
                <Card sx={{ display: 'flex' }} variant="outlined" style={{cursor: 'pointer'}}>
                  <CardContent>
                    <div style={{display:'flex'}}>
                      <div style={{width: '100px'}}>
                        <img alt="" src={poap.image_url} style={{width: '100px', height: '100px'}} />
                      </div>
                      <div  style={{marginLeft: '20px'}}>
                        <strong className="poapman-link">{poap.name}</strong><br/>
                        { `${poap.city}, ${poap.country}`}<br/>
                        { poap.start_date === poap.end_date ? poap.start_date : `${poap.start_date}-${poap.end_date}` }<br/>
                        <em style={{ display: 'inline-block', marginTop: '4px', marginBottom: '8px', color: '#aaa'}}>{poap.description}</em><br/>
                        {poap.virtual_event && `Virtual`} {poap.virtual_event && poap.private_event && ` | `} {poap.private_event && `Private`}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          )
        })}
      </Grid>  
    );
}

export default Cards;