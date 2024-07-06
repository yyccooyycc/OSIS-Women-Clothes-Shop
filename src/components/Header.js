import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "../store/authSlice";

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

    ;
    return (
      <div className="container">
        <header className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            {t("title")}
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">{t("Home")}</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu">{t("Menu")}</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">{t("Cart")}</Link>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <button onClick={() => changeLanguage("en")}>en</button>
            <button onClick={() => changeLanguage("zh")}>zh</button>
            { isAuthenticated && <button onClick={handleLogout}>{t("Logout")}</button>}
            { !isAuthenticated && <button onClick={handleLogin}>{t("Login")}</button>}
          </div>
        </header>
      </div>
    );

}

export default Header;

