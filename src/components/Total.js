import React from 'react'
import { makeStyles } from '@mui/styles';
import accounting from 'accounting';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  button: {

  }
}))

const Total = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5>Total items: 3</h5>
      <h5>{accounting.formatMoney(777)}</h5>
      <Button className={classes.button} variant='contained' color='primary'>Check out</Button>
    </div>
  )
}

export default Total;
