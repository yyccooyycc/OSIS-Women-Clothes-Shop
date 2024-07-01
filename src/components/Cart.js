import React,{useCallback, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback(item => {
    dispatch(removeFromCart(item));
},[dispatch]);

  const totalPrice=useMemo(()=>{
    return cart.reduce((total,item)=>total+item.price*item.quantity,0)
  },[cart])

return (
  <div>
    <h2>Cart</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name} : ${item.price} x {item.quantity}
          <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </li>
      ))}
    </ul>
    <div>Total Price: $ {totalPrice}</div>
  </div>
);
}

export default Cart;
    