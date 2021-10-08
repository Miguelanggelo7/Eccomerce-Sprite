import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/amazon-logo.png"
import { makeStyles } from '@mui/styles';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
    backgroundColor: 'whitesmoke',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    marginLeft: '20px'
  },
  image: {
    height: '2rem',
    margin: '7px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' >
            <img  className={classes.image} src={logo} />
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color='textPrimary' component='p'>
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button color='secondary' variant='outlined'>
              <strong>Sign in</strong>
            </Button>
            <IconButton aria-label='show cart-items' color='inherit' >
              <Badge badgeContent={2} color='error'> 
                <ShoppingCart fontSize='large' color='secondary'/>
              </Badge>
            </IconButton>
            
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
