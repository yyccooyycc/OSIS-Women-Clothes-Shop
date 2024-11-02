import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";
import "../styles/App.scss";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "./CartIcon";
import DropdownMenu from "./DropdownMenu";
import { toggleSearchBox } from '../store/searchSlice';
import SearchBox from './SearchBox';


const Header = ({onSearch}) => {
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
  const showSearchBox = useSelector((state) => state.search.showSearchBox);


  return (
    <div className="container">
      <header className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
                 <DropdownMenu />
            <li className="nav-item">
              <Link to="/cart">
                <CartIcon itemCount={cartItemCount} />
              </Link>
            </li>
            <li className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch(toggleSearchBox())}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ width: "24px", height: "24px", fill: "white" }}
              >
                <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
              </svg>
               {showSearchBox && (
                <div className="search-box-container">
                  <li>
                    <SearchBox />
                  </li>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <Link to="/">
          <img
            src={require("../assets/images/OSIS_white_transparent.png")}
            alt="Banner 4"
            width="180px"
            style={{ background: "none" }}
          />
          </Link>

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
