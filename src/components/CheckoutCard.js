import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import accounting from 'accounting';
import DeleteIcon from "@mui/icons-material/Delete"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  action: {
    marginTop: '1rem',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  cardRating: {
    display: 'flex',
  }
}))

const CheckoutCard = ({product : {id, name, productType, image, price, rating, description}}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            variant='h5'
            color='GrayText'
            className={classes.action}
          >
            {accounting.formatMoney(price, "$")}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))
          }
        </div>
        <IconButton>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CheckoutCard;