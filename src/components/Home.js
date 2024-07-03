import { useTranslation } from 'react-i18next';


function Home(){
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('Home')}</h2>
            <p>{t('Welcome')}</p>
        </div>
    )
}

export default Home;