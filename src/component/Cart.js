import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const payment = () => {
    // eslint-disable-next-line no-alert
    alert('您所選購的商品已經付款!');
  };
  return (
    <div className="cartBar">

      <Button variant="primary" className="shoppingCart" onClick={handleShow}>
        購物車
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>我的商品</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {cartItems.map((item) => (
            <div key={item.id}>
              <div>{item.title}</div>

              <div>

                <Button variant="warning" className="addRemoveButton" onClick={() => onAdd(item)}>+</Button>
                <Button variant="warning" className="addRemoveButton" onClick={() => onRemove(item)}>-</Button>

              </div>

              <div>
                {item.qty}
                {' '}
                x $
                {item.price}
              </div>

              <hr />
            </div>
          ))}

          Total Price:
          {itemPrice}

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>關閉</Button>
          <Button variant="warning" onClick={payment}>結帳</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Cart;
