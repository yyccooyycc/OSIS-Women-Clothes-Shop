import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CartIcon.scss";

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
