import React from 'react';
import NextLink from 'next/link';

import { AppBar, Toolbar, Typography, makeStyles, Link } from '@material-ui/core';
import { EmojiEmotions } from '@material-ui/icons';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme =>({
  title: {
    marginLeft: theme.spacing(1.25)
  }
}))

const Nav = () => {
  const classes = useStyles();
  const router = useRouter();
  const currentPath = router.pathname.replace(/\//g, '') || 'home'

  return (
    <AppBar color='primary' position='fixed'>
      <Toolbar>
        <EmojiEmotions />
        <Typography onClick={() => {router.push('/')}} variant='h6' component='h1' className={classes.title}  style={{ marginRight: '16px', cursor:'pointer' }}>
          PoapMan
        </Typography>
        <nav className={currentPath}>
          <NextLink href="/" passHref>
            <Link style={{ marginRight: '8px' }} color="secondary" underline={currentPath === 'home' ? 'always' : 'hover'}>Dashboard</Link>
          </NextLink>
          <NextLink href="/create" passHref>
            <Link style={{ marginRight: '8px' }} color="secondary" underline={currentPath === 'create' ? 'always' : 'hover'}>Create</Link>
          </NextLink>
          <NextLink href="/manage" passHref>
            <Link style={{ marginRight: '8px' }} color="secondary" underline={currentPath === 'manage' ? 'always' : 'hover'}>Manage</Link>
          </NextLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;