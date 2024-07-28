import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";
import "../styles/App.scss"
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAlignLeft,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "./CartIcon";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    dispatch(login());
  };
  const cartItemCount = useSelector((state) => state.cart.totalItemCount);

  return (
    <div className="container">
      <header className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="menuDropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faAlignLeft} />
                </button>
                <div className="dropdown-menu">
                  <Link to="/menu" className="dropdown-item">
                    {t("Menu")}
                  </Link>
                  <Link to="/menu" className="dropdown-item">
                    {t("Tops")}
                  </Link>
                  <Link to="/menu" className="dropdown-item">
                    {t("Shorts")}
                  </Link>
                  <Link to="/menu" className="dropdown-item">
                    {t("Skirts")}
                  </Link>
                  <Link to="/menu" className="dropdown-item">
                    {t("Jeans")}
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <CartIcon itemCount={cartItemCount} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <img
            src={require("../assets/images/OSIS_white_transparent.png")}
            alt="Banner 4"
            width="120px"
            style={{ background: "none" }}
          />
        </div>
        <div className="ml-auto">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("zh")}>中文</button>
          {isAuthenticated ? (
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              {t("Logout")}
            </button>
          ) : (
            <button onClick={handleLogin}>
              <FontAwesomeIcon icon={faSignInAlt} />
              {t("Login")}
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
