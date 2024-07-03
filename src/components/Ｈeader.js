import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

const Header=()=>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.siteName}>
            {t("title")}{" "}
          </Link>
          <nav className={styles.navbar}>
            <Link to="/">{t("Home")}</Link>
            <Link to="/menu">{t("Menu")}</Link>
            <Link to="/cart">{t("Cart")}</Link>
          </nav>
          <div className={styles.languageSwitcher}>
            <button onClick={() => changeLanguage("en")}>en</button>
            <button onClick={() => changeLanguage("zh")}>zh</button>
          </div>
          <button>{t("login")}</button>
        </div>
      </header>
    );

}

export default Header;

