import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  dialog: {
    borderRadius: '16px',
  },
  dialogTitle: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    padding: '1.5rem',
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  dialogContent: {
    padding: '2rem',
    fontSize: '1.1rem',
    color: '#333',
  },
  dialogActions: {
    padding: '1rem 1.5rem',
    gap: '1rem',
  },
  button: {
    borderRadius: '8px',
    padding: '0.5rem 2rem',
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '1rem',
  },
  cancelButton: {
    color: '#666',
    border: '2px solid #e0e0e0',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderColor: '#ccc',
    },
  },
  okButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    '&:hover': {
      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    },
  },
}));

function MsgYNModal(props) {
  const classes = useStyles();
  const { onClose, message, open, ...other } = props;

  const handleCancel = () => {
    onClose(false);
  };

  const handleOk = () => {
    onClose(true);
  };

  return (
    <Dialog
      aria-labelledby="confirmation-dialog-title"
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onClose(event, reason)
        }
      }}
      classes={{ paper: classes.dialog }}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" className={classes.dialogTitle}>
        Confirmation Of Order
      </DialogTitle>
      <DialogContent dividers className={classes.dialogContent}>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button 
          autoFocus 
          onClick={handleCancel} 
          className={`${classes.button} ${classes.cancelButton}`}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleOk} 
          className={`${classes.button} ${classes.okButton}`}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MsgYNModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default MsgYNModal
