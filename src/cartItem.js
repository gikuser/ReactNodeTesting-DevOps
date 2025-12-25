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
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid #e0e6ed',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    flex: '1 0 auto',
    padding: '20px',
  },
  cover: {
    width: 150,
    minHeight: 150,
    objectFit: 'cover',
  }
}));

export default function CartItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{ fontWeight: 700, color: '#333', marginBottom: '8px' }}>
            {props.item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: '12px' }}>
            {props.item.description}
          </Typography>
          <Typography variant="h6" style={{ color: '#667eea', fontWeight: 700 }}>
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
