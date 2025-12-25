import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    marginBottom: '0.5rem',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    padding: '1rem',
  },
  content: {
    flex: '1 0 auto',
    padding: '0.5rem 1rem !important',
  },
  cover: {
    height: '120px',
    width: '120px',
    minWidth: '120px',
    objectFit: 'cover',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  title: {
    fontWeight: 600,
    color: '#333',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  description: {
    color: '#666',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  },
  price: {
    color: '#667eea',
    fontWeight: 700,
    fontSize: '1.2rem',
    marginTop: '0.5rem',
  },
}));

export default function CartItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.title}>
            {props.item.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {props.item.description}
          </Typography>
          <Typography variant="subtitle1" className={classes.price}>
            ${(props.item.cost/100).toFixed(2)}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.item.imageUrl}
        title="product image"
      />
    </Card>
  );
}
