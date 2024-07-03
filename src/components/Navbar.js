import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar=()=>{
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return <nav className="nav">
        <Link  to="/" className="site-title">{t('title')} </Link>
        <ul></ul>
        <ul>
            <li><Link  to="/">{t('Home')}</Link></li>
            <li><Link  to="/menu">{t('Menu')}</Link></li>
            <li><Link  to="/cart">{t('Cart')}</Link></li>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('zh')}>zh</button>
        </ul>
        </nav>;
}

export default Navbar;

