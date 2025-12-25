import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function MsgYNModal(props) {
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
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
        ✅ Confirmation Of Order
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description" style={{ fontSize: '1.1rem', color: '#333' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ padding: '16px 24px' }}>
        <Button 
          autoFocus 
          onClick={handleCancel} 
          color="default"
          variant="outlined"
          style={{ padding: '8px 24px', fontWeight: 600 }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleOk} 
          color="primary"
          variant="contained"
          style={{ 
            padding: '8px 24px', 
            fontWeight: 600,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
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
