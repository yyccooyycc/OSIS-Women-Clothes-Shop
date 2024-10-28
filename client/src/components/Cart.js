import React,{useCallback, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleRemoveFromCart = useCallback(
    (item) => {
      dispatch(removeFromCart(item));
    },
    [dispatch]
  );

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  const getNameFromImage = (imageName) => {
    const nameWithoutExt = imageName.toUpperCase().split('.')[0];
    const nameParts = nameWithoutExt.split(/[-_]/);
    return nameParts[0]; 
  };

  return (
    <div>
      <h2>{t("Shopping_Cart")}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {getNameFromImage(item.filename)} : ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>{t('Remove')}</button>
          </li>
        ))}
      </ul>
      <div>Total Price: $ {totalPrice}</div>
    </div>
  );
}

export default Cart;
    