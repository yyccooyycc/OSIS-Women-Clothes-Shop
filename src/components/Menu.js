import React from 'react';
import { useDispatch } from 'react-redux';



const items=[
  {
    id:1,
    name:'Dumplings',
    price:100
  },
  {
    id:2,
    name:'Noodles',
    price:200
  },
  {
    id:3,
    name:'Fried Rice',
    price:300
  }
];
const Menu = () => {
  const dispatch = useDispatch();

  const addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  }
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;