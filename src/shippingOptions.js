import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  radioLabel: {
    margin: 0,
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid #e0e0e0',
    transition: 'all 0.3s ease',
    width: '100%',
    '&:hover': {
      borderColor: '#667eea',
      backgroundColor: '#f8f9ff',
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      minWidth: '200px',
      flex: '1',
    },
  },
  radioLabelChecked: {
    borderColor: '#667eea !important',
    backgroundColor: '#f0f2ff !important',
  },
  radio: {
    color: '#667eea',
    '&.Mui-checked': {
      color: '#667eea',
    },
  },
}));

function ShippingOptions(props) {
  const classes = useStyles();
  const [shipping, setShipping] = useState(0)

  const handleChange = (event, value) => {
    setShipping(parseInt(value));
    props.onChangeValue(parseInt(value))
  }

  return (
    <div className={classes.root}>
      <h4 className={classes.title}>Choose your delivery option:</h4>
      <RadioGroup
        className={classes.radioGroup}
        aria-label="delivery"
        data-testid="delivery_option_id"
        name="delivery"
        value={shipping}
        onChange={(event, value) => handleChange(event, value)}
      >
        <FormControlLabel 
          value={0} 
          control={<Radio className={classes.radio} inputProps={{"data-testid": `radio-button-free`}} />} 
          label="Free 10 day shipping"
          classes={{ root: `${classes.radioLabel} ${shipping === 0 ? classes.radioLabelChecked : ''}` }}
        />
        <FormControlLabel 
          value={500} 
          control={<Radio className={classes.radio} inputProps={{"data-testid": `radio-button-2day`}} />} 
          label="$5.00 2-day shipping"
          classes={{ root: `${classes.radioLabel} ${shipping === 500 ? classes.radioLabelChecked : ''}` }}
        />
        <FormControlLabel 
          value={2000} 
          control={<Radio className={classes.radio} inputProps={{"data-testid": `radio-button-overnight`}} />} 
          label="$20.00 overnight shipping"
          classes={{ root: `${classes.radioLabel} ${shipping === 2000 ? classes.radioLabelChecked : ''}` }}
        />
      </RadioGroup>
    </div>
  );
}

ShippingOptions.propTypes = {
  onChangeValue: PropTypes.func.isRequired
};

export default ShippingOptions
