import React, { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import Cart from './component/Cart';
import Nav from './component/Nav';
import Main from './component/Main';

import data from './data';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => (x.id === product.id
        ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      // console.log(...cartItems);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id
        ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  };

  return (

    <div>

      <Nav />

      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <Main products={products} onAdd={onAdd} />

    </div>
  );
}

export default App;
