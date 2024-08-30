import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";
import "../styles/App.scss";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
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
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "24px", height: "24px", fill: "white" }}
                  >
                    <path
                      d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z"
                      fillRule="nonzero"
                    />
                  </svg>
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
            <li className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ width: "24px", height: "24px", fill: "white" }}
              >
                <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
              </svg>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <img
            src={require("../assets/images/OSIS_white_transparent.png")}
            alt="Banner 4"
            width="180px"
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
