import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { Toolbar, Typography, makeStyles } from '@material-ui/core';

import { ReactComponent as Logo } from '../poapman.svg';

const useStyles = makeStyles(theme =>({
  title: {
    marginLeft: theme.spacing(1.25)
  }
}))

const Nav = () => {
  const location = useLocation();
  const classes = useStyles();
  const currentPath = location.pathname.replace(/\//g, '') || 'home';

  const navigate = useNavigate();

  return (
    <div className='header'>
      <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex'}}>
          <Logo onClick={() => {navigate("/")}} />
          <Typography onClick={() => {navigate("/")}} variant='h6' component='h1' className={classes.title}  style={{ marginRight: '16px', cursor:'pointer', fontWeight: 'bold', marginTop: '3px' }}>
            PoapMan
          </Typography>
        </div>
        <nav className={currentPath}>
          <RouterLink to="/" className={currentPath === 'home' && `nav-active`}> 
            Dashboard
          </RouterLink>
          <RouterLink to="/create" className={currentPath === 'create' && `nav-active`}>
            Create
          </RouterLink>
          <RouterLink to="/manage" className={currentPath === 'manage' && `nav-active`}>
            Manage
          </RouterLink>
        </nav>
      </Toolbar>
    </div>
  );
}

export default Nav;