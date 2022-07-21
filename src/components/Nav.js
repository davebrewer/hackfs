import React from 'react';
import { Link as RouterLink, useLocation } from "react-router-dom";

import { AppBar, Toolbar, Typography, makeStyles, Link } from '@material-ui/core';
import { EmojiEmotions } from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
  title: {
    marginLeft: theme.spacing(1.25)
  }
}))


const Nav = () => {
  const location = useLocation();
  const classes = useStyles();
  const currentPath = location.pathname.replace(/\//g, '') || 'home';
  console.log(currentPath);

  return (
    <AppBar color='primary' position='fixed'>
      <Toolbar>
        <EmojiEmotions />
        <Typography onClick={() => {}} variant='h6' component='h1' className={classes.title}  style={{ marginRight: '16px', cursor:'pointer' }}>
          PoapMan
        </Typography>
        <nav className={currentPath}>
          <RouterLink to="/">
            Dashboard
            {/* <Link style={{ marginRight: '8px' }} color="secondary" underline={currentPath === 'home' ? 'always' : 'hover'}>Dashboard</Link> */}
          </RouterLink>
          <RouterLink to="/create">
            Create
            {/* <Link style={{ marginRight: '8px' }} color="secondary" underline={'hover'}>Create</Link> */}
          </RouterLink>
          <RouterLink to="/manage">
            Manage
            {/* <Link style={{ marginRight: '8px' }} color="secondary" underline={currentPath === 'manage' ? 'always' : 'hover'}>Manage</Link> */}
          </RouterLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;