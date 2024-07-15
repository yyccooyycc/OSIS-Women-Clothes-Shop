import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';
import '../styles/index.scss'
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "./CartIcon";


const Header=()=>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const isAuthenticated = useSelector(
      (state) => state.auth.isAuthenticated
      );

    const dispatch = useDispatch();
    const handleLogout = () => {
          dispatch(logout());
        };
    const handleLogin = () => {
          dispatch(login());
        };
    const cartItemCount = useSelector((state) => state.cart.totalItemCount);

    ;
    
    return (
      <div className="container">
        <header className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} />
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu">
                  <FontAwesomeIcon icon={faBars} />
                  {t("Menu")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <CartIcon itemCount={cartItemCount} />
                  {t("Cart")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse">
            <h1 to="/" className="navbar-brand">
              {t("title")}
            </h1>
          </div>
          <div className="ml-auto">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("zh")}>中文</button>
            {isAuthenticated && (
              <button onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                {t("Logout")}
              </button>
            )}
            {!isAuthenticated && (
              <button onClick={handleLogin}>
                <FontAwesomeIcon icon={faSignInAlt} />
                {t("Login")}
              </button>
            )}
          </div>
        </header>
      </div>
    );

}

export default Header;

