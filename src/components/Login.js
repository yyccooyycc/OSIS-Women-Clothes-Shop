import React from 'react';
import { useTranslation } from 'react-i18next';


function Login(){
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Home')}</h2>
            <p>{t('Welcome')}</p>
        </div>
    );
}

export default Login;