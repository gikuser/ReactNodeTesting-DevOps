import React, { useState } from 'react';
import CartView from './cartview'
import ShippingOptions from './shippingOptions'
import MsgYNModal from './msgYNModal';
import './App.css';

function App(props) {
  const [showMsgYNModal, setMsgYNModal] = useState({ showMsgYNModal: false, message: "", methodOnClose: ()=>{} });
  const [shippingCost, setShippingCost] = useState(0);

  const handleChangeValue = (value) => {
    setShippingCost(value);
  }

  return (
    <>
      <div className="App">
        <div className="app-header">
          <h1>🛍️ Shopping Cart</h1>
          <p data-testid="thanks_id">Thank you for shopping with us!</p>
        </div>
        <div className="cart-container">
          <CartView shippingCost={shippingCost} cartId={props.cartId} />
        </div>
        <div className="shipping-container">
          <ShippingOptions onChangeValue={handleChangeValue} />
        </div>
        <button 
          className="purchase-button"
          onClick={() => setMsgYNModal({
            showMsgYNModal: true, message: "Do you agree with the purchase agreement?", methodOnClose: (decision) => {
              setMsgYNModal({ msgYNModalState: { showMsgYNModal: false, message: "", methodOnClose: ()=>{} } })
            }
          })} 
        >
          Make Purchase
        </button>
      </div>
      <MsgYNModal
        style={{ width: '80%', maxHeight: 435 }}
        id="yesno-confirm"
        keepMounted
        message={showMsgYNModal.message}
        open={showMsgYNModal.showMsgYNModal}
        onClose={showMsgYNModal.methodOnClose}
      />
    </>
  );
}

export default App;
