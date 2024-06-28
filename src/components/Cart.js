import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/reducer';

function Cart() {
  const cart = useSelector(state => {
    console.log('State:', state);
    return state.cart.cart});
  const dispatch = useDispatch();

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
};

return (
  <div>
    <h2>Cart</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Cart;
    