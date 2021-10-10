import React from 'react'
import { makeStyles } from '@mui/styles';
import accounting from 'accounting';
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh'
  },
}))

const Total = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>{`Total items: ${basket?.length}`}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
      <Button sx={{ marginTop: '2rem' }} variant='contained' color='primary'>Check out</Button>
    </div>
  )
}

export default Total;
