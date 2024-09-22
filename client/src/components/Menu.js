import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useTranslation } from 'react-i18next';
import ProductGrid from './Products';


const items=[
  {
    id:1,
    name:'T-shirt',
    price:100
  },
  {
    id:2,
    name:'Top',
    price:200
  },
  {
    id:3,
    name:'Skirt',
    price:300
  }
];

const Menu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Menu')}</h2>
      <ProductGrid/>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(addToCart(item))}>{t('Add_to_Cart')}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;